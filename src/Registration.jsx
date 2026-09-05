import { useState } from 'react'
import Address from './Address'
import PersonalInfo from './PersonalInfo'

function Registration() {
  const [isOtherGender, setIsOtherGender] = useState(false)
  const [canRegister, setCanRegister] = useState(false)

  function updateRegisterButtonState(event) {
    const page = event.currentTarget
    const otherRadio = page.querySelector('#other')
    let allComplete = true

    page.querySelectorAll('input[required], select[required], #genderOther').forEach((field) => {
      if (field.type === 'radio') return
      if (field.type === 'checkbox') {
        if (!field.checked) allComplete = false
        return
      }
      if (field.id === 'genderOther' && !otherRadio.checked) return
      if (field.value.trim() === '') allComplete = false
    })

    const anyGenderSelected = page.querySelector('input[name="Gender"]:checked') !== null
    setCanRegister(allComplete && anyGenderSelected)
  }

  function handleChange(event) {
    if (event.target.name === 'Gender') {
      setIsOtherGender(event.target.id === 'other' && event.target.checked)
    }
    updateRegisterButtonState(event)
  }

  return (
    <main className="page-shell" onInput={updateRegisterButtonState} onChange={handleChange}>
      <h1>College Admissions</h1><br />
      <PersonalInfo isOtherGender={isOtherGender} />
      <Address canRegister={canRegister} />
    </main>
  )
}

export default Registration
