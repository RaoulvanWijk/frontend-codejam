import React from 'react'
import Header from '../components/Header'
import EnterNameForm from '../components/EnterNameForm'
import Timer from '../components/Timer'

export default function EnterNamePage() {
  return (
    <div className='bg-bg h-screen overflow-x-hidden'>
        <Header />
        <EnterNameForm />
        <Timer />
    </div>
  )
}
