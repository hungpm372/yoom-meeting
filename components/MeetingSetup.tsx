'use client'

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false)
  const call = useCall()

  if (!call) throw new Error('Usecall must be used within StreamCall component')

  useEffect(() => {
    if (isMicCamToggleOn) {
      call?.camera.disable()
      call?.microphone.disable()
    } else {
      call?.camera.enable()
      call?.microphone.enable()
    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col justify-center items-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview />
      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex justify-center items-center gap-2 font-medium'>
          <input type='checkbox' checked={isMicCamToggleOn} onChange={(e) => setIsMicCamToggleOn(e.target.checked)} />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className='rounded-md bg-green-500 px-4 py-2.5'
        onClick={() => {
          call.join()
          setIsSetupComplete(true)
        }}
      >
        Join meeting
      </Button>
    </div>
  )
}

export default MeetingSetup
