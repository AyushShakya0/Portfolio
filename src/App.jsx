import React from 'react'

import gsap from 'gsap';
import { Draggable, ScrollTrigger,SplitText } from 'gsap/all'

import { Navbar, Welcome, Dock } from '#components'
import { Terminal, Safari } from '#windows';

gsap.registerPlugin(Draggable,ScrollTrigger,SplitText);


const App = () => {
  return (
    <main>
        <Navbar/>
        <Welcome/>
        <Dock/>

        <Terminal/>
        <Safari/>
    </main>
  )
}

export default App
