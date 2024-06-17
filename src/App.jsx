import { useState } from 'react'
import './App.css'
import { REACT_LIVE_SCROLLING_SPEED, REACT_START_HOUR } from './config.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
      live scrolling speed :{REACT_LIVE_SCROLLING_SPEED}
      </p>

      <p className="read-the-docs">
      start hour :{ REACT_START_HOUR}
      </p>

    </>
  )
}

export default App
