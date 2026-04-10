import React from 'react'
import dayjs from 'dayjs'

import { navLinks,navIcons } from '#constants'
import useWindowStore from '#store/window'
import useThemeStore from '#store/theme'

const Navbar = () => {

    const {openWindow} = useWindowStore();
    const {toggleTheme} = useThemeStore();
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className='font-bold'>Ayush's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={()=> openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li 
                            key={id}
                            onClick={() => img === '/icons/mode.svg' && toggleTheme()}
                            style={{ cursor: img === '/icons/mode.svg' ? 'pointer' : 'default' }}
                        >
                            <img src={img} alt={`icon-${id}`} className='icon-hover'/>
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}

export default Navbar
