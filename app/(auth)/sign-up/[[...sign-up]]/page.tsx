import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <section className='flex h-screen w-full items-center justify-center py-32'>
      <SignUp />
    </section>
  )
}

export default SignUpPage
