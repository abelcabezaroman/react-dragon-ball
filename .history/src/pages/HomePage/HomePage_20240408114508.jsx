import React, { useRef } from 'react'

export default function HomePage() {

  const audioRef = useRef();
  
  return (
    <div>
      <audio src="dragon.mp3" ref={audioRef}></audio>

      <button>Play</button>
    </div>
  )
}
