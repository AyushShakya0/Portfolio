import React from 'react'
import { locations } from '#constants'
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/all';
import gsap from 'gsap';
import { clsx } from 'clsx';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const projects = locations.work?.children ?? [];

const Home = () => {

    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    // useGSAP(()=>{
    //     Draggable.create('.folder');
    // },[])

    useGSAP(() => {
        const draggable = Draggable.create('.folder');
        return () => draggable.forEach(d => d.kill());
    }, []);


    // later on change the folder hover css maybe reduce the opacity of the text color


    return (
        <section id='home'>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className={clsx("group folder", project.windowPosition)} onClick={() => handleOpenProjectFinder(project)}>
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>

                    </li>
                ))}
            </ul>

        </section>
    )
}

export default Home
