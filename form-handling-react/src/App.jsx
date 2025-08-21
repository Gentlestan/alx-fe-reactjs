import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

import './App.css'

function App() {
 

  return (
    <div>
      <h1 className='text-center'>Registration</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  )
}

export default App
