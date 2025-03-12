import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './components/loadingScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadingScreen></LoadingScreen>
    </>
  )
}

export default App
