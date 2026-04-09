import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import useWindowStore from '#store/window'
import { WindowControls } from '#components'

const Video = () => {
    const { windows } = useWindowStore();
    const data = windows.videofile?.data;

    if (!data) return null;

    const { name, videoUrl, href } = data;

    return (
        <>
            <div id='window-header'>
                <WindowControls target='videofile' />
                <h2>{name}</h2>
            </div>

            <div className='p-5 bg-white'>
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        controls
                        className='w-full h-auto max-h-[70vh] rounded'
                    />
                ) : href ? (
                    <div className='text-sm text-gray-700'>
                        <p className='mb-3'>Video source is external.</p>
                        <a
                            href={href}
                            target='_blank'
                            rel='noreferrer'
                            className='text-blue-600 underline'
                        >
                            Open video in a new tab
                        </a>
                    </div>
                ) : (
                    <p className='text-sm text-gray-600'>No video source provided.</p>
                )}
            </div>
        </>
    )
}

const VideoWrapper = WindowWrapper(Video, 'videofile');

export default VideoWrapper
