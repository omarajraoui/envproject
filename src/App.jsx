import './App.css'
import { REACT_LIVE_SCROLLING_SPEED, REACT_START_HOUR } from './config'

function App() {
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
