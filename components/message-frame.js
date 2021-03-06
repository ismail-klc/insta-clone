import React from 'react'

function MessageFrame() {

    const renderMessage = (a, content, img) => {
        return (
            <div className="w-1/2 flex" key={a}>
                {
                    img ?
                        <img className="rounded-2xl" src={img} /> :
                        <div className="bg-gray-300 rounded-2xl py-2 px-4 break-all">
                            <span>{content}</span>
                        </div>
                }
            </div>
        )
    }

    const renderMyMessage = (a, content, img) => {
        return (
            <div className="w-1/2 flex self-end justify-end" key={a}>
                {
                    img ?
                        <img className="rounded-2xl" src={img} /> :
                        <div className="bg-gray-300 rounded-2xl py-2 px-4 break-all">
                            <span>{content}</span>
                        </div>
                }
            </div>
        )
    }

    return (
        <div className="flex flex-col p-4 flex-1">
            <div className="flex-1 overflow-y-auto min-h-0 relative no-scroll-bar flex">
                <div className="absolute flex flex-col space-y-2 py-2  w-full">

                    {
                        Array(3).fill(null).map((_, a) =>
                            renderMessage(a, `incoming message ${a}`))
                    }
                    {
                        renderMessage(0, "", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")
                    }
                    {
                        Array(5).fill(null).map((_, a) =>
                            renderMyMessage(a, `outgoing msg ${a}`))
                    }
                    {
                        renderMyMessage(0, "", "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
                    }
                </div>

            </div>

            <div className="w-full border rounded-full px-4 py-2 flex items-center space-x-4">
                <button>
                    <svg aria-label="??fade Simgesi" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                </button>
                <input className="text-sm flex-1 outline-none" placeholder="Mesaj..." />
                <button>
                    <svg aria-label="Foto??raf veya Video Ekle" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M38.5 0h-29C4.3 0 0 4.3 0 9.5v29C0 43.7 4.3 48 9.5 48h29c5.2 0 9.5-4.3 9.5-9.5v-29C48 4.3 43.7 0 38.5 0zM45 38.5c0 3.6-2.9 6.5-6.5 6.5h-29c-3.3 0-6-2.5-6.4-5.6l8.3-8.3c.1-.1.3-.2.4-.2.1 0 .2 0 .4.2l6.3 6.3c1.4 1.4 3.6 1.4 5 0L35.9 25c.2-.2.6-.2.8 0l8.3 8.3v5.2zm0-9.4l-6.2-6.2c-1.3-1.3-3.7-1.3-5 0L21.3 35.3c-.1.1-.3.2-.4.2-.1 0-.2 0-.4-.2L14.2 29c-1.3-1.3-3.7-1.3-5 0L3 35.2V9.5C3 5.9 5.9 3 9.5 3h29C42.1 3 45 5.9 45 9.5v19.6zM11.8 8.2c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path></svg>
                </button>
                <button>
                    <svg aria-label="Be??en" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default MessageFrame
