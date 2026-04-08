import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'

const Contact = () => {
  return (
    <>  
    <div id="window-header">
    <WindowControls target="contact"/>

        <h2>Contact me</h2>

    </div>

    <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="Ayush" className='w-20 rounded-full' />
    </div>

    {/* <h3>If it matters, I’m interested. Let’s connect.”</h3> */}
    <h3>Let’s connect.”</h3>
    <p>Have an idea, opportunity, or problem worth solving? Let’s talk.</p>
    <p>shakyaayush82@gmail.com</p>

    <ul>
        {socials.map(({id, bg, link, icon, text})=>(
            <li key={id} style={{backgroundColor:bg}}>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <img src={icon} alt={text} className='size-5' />
                <p>{text}</p>
            </a>
            </li>
        ))}
    </ul>
    
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow
