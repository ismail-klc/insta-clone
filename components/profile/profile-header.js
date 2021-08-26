import React, { useState } from 'react'
import ProfileModal from '../modals/profile-modal'

function ProfileHeader({ isMe }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className="flex flex-col w-full">
            <div className="px-4 md:px-16 pb-12 border-b  flex md:flex-row flex-col flex-shrink-0">
                <div className="flex">
                    <a>
                        <img alt="profil resmi" className="w-[72px] h-[72px] md:w-36 md:h-36 rounded-full" data-testid="user-avatar" draggable="false" src="https://galeri14.uludagsozluk.com/881/profil-fotografi-tavsiyesi_1423905.jpg" />
                    </a>
                    <div className="flex flex-col ml-4 md:ml-24 space-y-5 flex-1">
                        <div className="flex flex-col md:flex-row">
                            <div className="items-center flex space-x-4">
                                <span className="text-2xl font-extralight md:order-first">username</span>
                                {
                                    isMe &&
                                    <button>
                                        <svg aria-label="Seçenekler" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>
                                    </button>
                                }
                                {
                                    !isMe &&
                                    <button onClick={() => setShowModal(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="fill-current"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                    </button>
                                }
                            </div>
                            {
                                isMe &&
                                <button className="md:ml-4 mt-2 md:mt-0 md:w-auto w-full border border-gray-300 rounded px-2 flex-shrink-0">
                                    Profili Düzenle
                                </button>
                            }
                            {
                                !isMe &&
                                <div className="flex flex-row space-x-2">
                                    <button className="md:ml-4 mt-2 md:mt-0 md:w-24 w-1/2 border py-1 text-white bg-blue-500 rounded px-2 flex-shrink-0">
                                        Takip Et
                                    </button>
                                    <button className="rotate-180 md:ml-4 mt-2 md:mt-0 w-auto  border py-1 text-white bg-blue-500 rounded px-2 flex-shrink-0">
                                        <svg aria-label="Aşağı Ok Simgesi" class="_8-yf5 " fill="#ffffff" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
                                    </button>
                                </div>
                            }
                        </div>
                        <div className="space-x-6 hidden md:block">
                            <span><b>10</b> gönderi</span>
                            <a href="#"><b>110</b> takipçi</a>
                            <a href="#"><b>210</b> takip</a>
                        </div>
                        <div className="hidden md:block">
                            Bio
                        </div>
                    </div>
                </div>
                <div className="md:hidden block mt-4 md:mt-0">Bio</div>
                <div className="border-t border-gray-300 flex justify-around md:hidden p-1 mt-4 -mb-10 -mx-4">
                    <span className="items-center flex-col flex">
                        <b>10</b> <span className="block text-gray-400">gönderi</span>
                    </span>
                    <a href="#" className="items-center flex-col flex">
                        <b>110</b> <span className="block text-gray-400">takipçi</span>
                    </a>
                    <a href="#" className="items-center flex-col flex">
                        <b>110</b> <span className="block text-gray-400">takip</span>
                    </a>
                </div>

            </div>
            {/* tabs */}
            <div className="flex space-x-10 justify-around sm:justify-center p-4 text-sm">
                <a href="#" className="uppercase flex items-center space-x-2">
                    <svg role="img" viewBox="0 0 48 48" className="fill-current w-6 h-6 sm:w-3 sm:h-3"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                    <span className="hidden sm:block">Gönderiler</span>
                </a>
                <a href="#" className="uppercase flex items-center space-x-2">
                    <svg role="img" viewBox="0 0 48 48" className="fill-current w-6 h-6 sm:w-3 sm:h-3"><path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path></svg>
                    <span className="hidden sm:block">IGTV</span>
                </a>
                <a href="#" className="uppercase flex items-center space-x-2">
                    <svg role="img" viewBox="0 0 48 48" className="fill-current w-6 h-6 sm:w-3 sm:h-3"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    <span className="hidden sm:block">Kaydedilenler</span>
                </a>
                <a href="#" className="uppercase flex items-center space-x-2">
                    <svg role="img" viewBox="0 0 48 48" className="fill-current w-6 h-6 sm:w-3 sm:h-3"><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path></svg>
                    <span className="hidden sm:block">Etiketlenenler</span>
                </a>
            </div>
        </div>
        {
            showModal &&
            <ProfileModal onClick={() => setShowModal(false)}/>
        }
        </>
    )
}

export default ProfileHeader
