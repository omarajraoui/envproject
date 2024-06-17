import React from 'react'
import { REACT_LIVE_SCROLLING_SPEED, REACT_START_HOUR } from '../config'

const Home = () => {
  return (
    <div>
          <div>
        <h1>hey </h1>
        <p className="read-the-docs">
      live scrolling speed :{REACT_LIVE_SCROLLING_SPEED}
      </p>

      <p className="read-the-docs">
      start hour :{ REACT_START_HOUR}
      </p>

      
    </div>
    </div>
  )
}

export default Home
