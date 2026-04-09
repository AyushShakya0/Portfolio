import React from 'react'

import gsap from 'gsap';
import { Draggable, ScrollTrigger,SplitText } from 'gsap/all'

import { Navbar, Welcome, Dock, Home } from '#components'
import { Terminal, Safari,Resume,Finder,Text,Image,Video,Contact,Photos } from '#windows';

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
        <Video/>
        <Contact/>
        <Home/>
        <Photos/>

    </main>
  )
}

export default App
