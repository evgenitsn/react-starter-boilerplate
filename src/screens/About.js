import React from 'react'
import useForm from 'react-hook-form'

function About() {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <h2>About</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='firstName' ref={register} />
        <input name='lastName' ref={register({ required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <input type='submit' />
      </form>
    </div>
  )
}

export default About
