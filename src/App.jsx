import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Notification from './components/Notification'
import Chat from './components/Chat'

function App() {

  return (
    <div style={{maxWidth:"430px", maxHeight:"932px"}}>
      <Notification />
      <Chat />
    </div>
  )
}

export default App
