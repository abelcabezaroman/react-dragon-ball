import React, { useRef } from 'react'

export default function HomePage() {

  const audioRef = useRef();
  
  return (
    <div>
      <audio src="" ref={audioRef}></audio>
    </div>
  )
}
