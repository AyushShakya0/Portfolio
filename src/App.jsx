import React from 'react'

import gsap from 'gsap';
import { Draggable, ScrollTrigger,SplitText } from 'gsap/all'

import { Navbar, Welcome, Dock } from '#components'
import { Terminal, Safari,Resume,Finder,Text,Image,Contact } from '#windows';

gsap.registerPlugin(Draggable,ScrollTrigger,SplitText);


const App = () => {
  return (
    <main>
        <Navbar/>
        <Welcome/>
        <Dock/>

        <Terminal/>
        <Safari/>
        <Resume/>
        <Finder/>
        <Text/>
        <Image/>
        <Contact/>
        

    </main>
  )
}

export default App
