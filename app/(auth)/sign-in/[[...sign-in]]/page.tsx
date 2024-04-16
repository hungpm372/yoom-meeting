import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <section className='flex h-screen w-full items-center justify-center py-32'>
      <SignIn />
    </section>
  )
}

export default SignInPage
