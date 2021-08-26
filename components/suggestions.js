import React from 'react'

function Suggestions() {
    return (
        <div className="fixed w-[320px] h-96 flex flex-col p-4 text-xs">
            <div className="flex justify-between">
                <a href="#">
                    <img alt="profil resmi" className="w-12 h-12 rounded-full" data-testid="user-avatar" draggable="false" src="https://galeri14.uludagsozluk.com/881/profil-fotografi-tavsiyesi_1423905.jpg" />
                </a>
                <div className="flex flex-col flex-1 justify-center text-sm ml-4">
                    <span className="font-medium -mb-1.5">name</span>
                    <span className="text-gray-500">username</span>
                </div>
                <button className="text-blue-500 font-medium">
                    Geçiş Yap
                </button>
            </div>
            <div className="flex justify-between mt-4">
                <span className="text-gray-500 text-sm font-semibold">Senin için öneriler</span>
                <a href="#" className="font-medium">Tümünü Gör</a>
            </div>
            {
                 Array(5).fill(null).map((_,a)  => (
                    <div className="flex justify-between space-y-2 mt-3 items-center" key={a}>
                        <a href="#">
                            <img alt="profil resmi" className="w-10 h-10 rounded-full" data-testid="user-avatar" draggable="false" src="https://galeri14.uludagsozluk.com/881/profil-fotografi-tavsiyesi_1423905.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 justify-start text-sm ml-4">
                            <span className="font-medium -mb-1.5">username</span>
                            <span className="text-gray-500">Seni takip ediyor</span>
                        </div>
                        <button className="text-blue-500 font-medium">
                            Takip Et
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
