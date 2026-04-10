import { WindowControls } from '#components'
import { locations } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import { clsx } from 'clsx'
import { Search } from 'lucide-react'
import React from 'react'

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const {openWindow}= useWindowStore();

    const renderList = (name, items) => (

        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (

                    <li key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(item.id === activeLocation?.id ? "active" : "not-active")}
                    >
                        <img src={item.icon} alt={item.name} className='w-4' />
                        <p className='text-sm font-medium truncate'>{item.name}</p>
                    </li>))}
            </ul>

        </div>

    )


    const openItem = (item)=>{
        if(item.fileType === 'pdf') return openWindow("resume");
        if(item.kind === 'folder') return setActiveLocation(item);
        if(['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");
        if(item.fileType === 'video') return openWindow("videofile", item);

        openWindow(`${item.fileType}${item.kind}`, item); 
        // come back here if it doesnt work
        // also later on add maybe a mail option so they can directly mail us from the portfolio 
                
    }


    return (
        <>
            <div id='window-header'>
                <WindowControls target='finder' />
                <Search className='icon' />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children)}

                    {/* rendering list this way so wont have to write it twice */}
                    {/* mostly so it could be helpful in the future so i can come back to this to copy hehe */}
                </div>


                <ul className='content'>
                    {activeLocation?.children.map((item) => (
                        <li key={item.id} className={item.position} onDoubleClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>

                        </li>
                    ))}

                </ul>
            </div>

        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow
