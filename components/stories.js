import React, { useRef } from 'react'

function Stories() {
    const ref = useRef()

    const toLeft = () => {
        ref.current.scroll({
            top: ref.current.offsetHeight,
            left: ref.current.scrollLeft - 300,
            behavior: 'smooth',
        });
    }

    const toRight = () => {
        ref.current.scroll({
            top: ref.current.offsetHeight,
            left: ref.current.scrollLeft + 300,
            behavior: 'smooth',
        });
    }

    return (
        <div className="relative w-full mb-6">
            <div ref={ref} className="no-scroll-bar bg-white border flex items-center px-3 overflow-x-auto py-6 transition-transform">

                <div className="flex space-x-5">
                    {
                        Array(20).fill(null).map((_, a) => (
                            <div className="flex flex-col justify-center flex-shrink-0 items-center" key={a}>
                                <img alt="profil resmi" className="w-14 h-14 rounded-full" data-testid="user-avatar" draggable="false" src="https://galeri14.uludagsozluk.com/881/profil-fotografi-tavsiyesi_1423905.jpg" />
                                <span className="text-xs">account{a}</span>

                            </div>
                        ))
                    }
                </div>
            </div>

            <button
                onClick={toLeft}
                className="absolute inline-flex shadow-lg items-center justify-center rounded-full bg-white w-6 h-6 left-3 top-1/2 transform -translate-y-1/2 -rotate-90">
                <svg aria-label="Aşağı Ok Simgesi" className="fill-current" role="img" viewBox="0 0 48 48" height="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
            </button>
            <button
                onClick={toRight}
                className="absolute inline-flex shadow-lg items-center justify-center rounded-full bg-white w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 rotate-90">
                <svg aria-label="Aşağı Ok Simgesi" className="fill-current" role="img" viewBox="0 0 48 48" height="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
            </button>
        </div>
    )
}

export default Stories
