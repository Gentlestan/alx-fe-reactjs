import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm.jsx'
//import AnotherForm from './components/AnotherForm'

import './App.css'

function App() {
 

  return (
    <div>
      <h1>Registration</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  )
}

export default App
