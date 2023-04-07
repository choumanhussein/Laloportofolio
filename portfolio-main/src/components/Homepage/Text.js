import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Design & Digital Artisan",
          "and you are just",
          " entering inside",
          "my minds...",
        ],
         autoStart: true,
         loop: true,
         deleteSpeed: 50,
         wrapperClassName: 'typewriter-output'
      }}
    />
  )
}

export default Text
