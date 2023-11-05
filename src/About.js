import React, { useEffect } from 'react'

export default function About() {

    useEffect(()=> {
        document.title="ABOUT"
    },[]);

  return (
    <div>
      About
    </div>
  )
}
