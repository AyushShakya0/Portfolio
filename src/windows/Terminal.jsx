import {WindowControls} from '#components'
import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react'
import useThemeStore from '#store/theme'
import React from 'react'

const Terminal = () => {
    const { theme } = useThemeStore();
    const flagColor = theme === 'dark' ? 'white' : 'black';
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';

    console.log(techStack);
    return (
        <>
            <div id="window-header">
                <WindowControls target='terminal'/>
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className='font-bold'>@ayush % </span>
                    show tech stack
                </p>
                <div className="label">
                    <p className="w-32">Category</p>
                    <p className="">Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex items-center'>
                            <Check className='check' size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        {i < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
                    </p>
                    <p style={{ color: textColor }}>
                        <Flag size={15} fill={flagColor} stroke={flagColor} />
                        Render time : 6ms
                    </p>
                </div>
            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow;
