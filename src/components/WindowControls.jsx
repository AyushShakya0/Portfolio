import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
    const {closeWindow}=useWindowStore();
  return (
    <div id='window-controls'>
        <div className='close' onClick={()=>closeWindow(target)}/>
        <div className='minimize' />
        <div className='maximize' />
        {/* need to implement maximize and minimize */}
        {/* and later dark mode too */}
      
    </div>
  )
}

export default WindowControls
