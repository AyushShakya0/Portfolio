import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
    const {closeWindow}=useWindowStore();
  return (
    <div id='window-controls'>
        <div className='close' onClick={()=>closeWindow(target)}/>
        <div className='minimize' onClick={()=>closeWindow(target)}/>
        <div className='maximize' />
        {/* need to implement maximize and minimize */}
        {/* and later dark mode too */}


{/* ideas not sure if it will work */}
        {/* to maximize dont use window wrapper and to minimize just remove the opacity ig  */}
        {/* and when i reopen after minimizing use fromto to scale it up and bring back the opacity */}
        {/* but will have to manage state of whether it was maximized before or not to show that
         but to properly scale it down after maximizing will be a challenge maybe*/}
         {/* so just close and reopen it to reset maybe???? */}
      
    </div>
  )
}

export default WindowControls
