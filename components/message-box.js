import React, { useState } from 'react'
import MessageFrame from './message-frame'

function MessageBox() {
    const [messageOpen, setMessageOpen] = useState(false)

    return (
        <div className="bg-white w-full border flex h-[85vh] rounded">
            <div className={"md:w-80 w-auto border-r md:flex flex-col z-10 bg-white "  + (!messageOpen ? 'block' : 'hidden')}>
                <div className="h-14 border-b md:flex hidden flex-row-reverse items-center px-4 justify-center relative">
                    <button className="absolute right-3 block">
                        <svg aria-label="Yeni Mesaj" height="24" role="img" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
                    </button>
                    <button className="flex items-center space-x-2">
                        <span className="text-lg">account</span>
                        <div className="rotate-180">
                            <svg aria-label="Aşağı Ok Simgesi" height="20" role="img" viewBox="0 0 48 48" width="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
                        </div>
                    </button>
                </div>

                {/* list */}
                <div className="mt-2">
                    {
                        Array(3).fill(null).map((_, a) => (
                            <a href="#"
                                onClick={() => setMessageOpen(true)}
                                className="flex-shrink-0 w-full px-4 py-2 flex hover:bg-gray-50 ">
                                <img className="w-14 h-14 border rounded-full" src="/img/icon.png" />
                                <div className="md:flex hidden flex-col flex-1 justify-center ml-2">
                                    <span className="text-sm font-light">name</span>
                                    <div className="text-sm font-light text-gray-500 flex ">
                                        <span className="flex-1">message</span>
                                        <span>19h</span>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>

            </div>
            <div className="flex flex-col flex-1">
                <div className={"h-14 border-b flex items-center space-x-2 px-4 " + (messageOpen ? 'block' : 'hidden')}>
                    <img className="w-6 h-6 border rounded-full sm:ml-6" src="/img/icon.png" />
                    <span className="flex-1 ml-2 -translate-y-1">name</span>
                    <button>
                        <svg aria-label="Yazışma Detaylarını Gör" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><circle clip-rule="evenodd" cx="24" cy="14.8" fill-rule="evenodd" r="2.6"></circle><path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z"></path></svg>
                    </button>
                    <button onClick={() => setMessageOpen(false)}>
                        X
                    </button>
                </div>

                {
                    !messageOpen &&
                    <div className="flex items-center justify-center flex-col flex-1">
                        <span className="w-24 h-24 border-2 border-black rounded-full p-5 ">
                            <svg aria-label="Direct" className="fill-current translate-y-1" role="img" viewBox="0 0 48 48"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </span>
                        <span className="font-light text-xl my-2">
                            Mesajların
                        </span>
                        <span className="text-sm text-gray-500 p-2">
                            Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.
                        </span>
                        <button className="bg-btnBlue font-medium text-sm text-white rounded px-3 py-1 mt-4">
                            Mesaj Gönder
                        </button>
                    </div>
                }
                {
                    messageOpen &&
                    <MessageFrame />
                }

            </div>
        </div>
    )
}

export default MessageBox
