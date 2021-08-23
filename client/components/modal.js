import React, { useEffect } from 'react'

function Modal({ children }) {

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden'
        return () => {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [])

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center transition-opacity duration-200 z-30">
            <div className="bg-white bg-opacity-100 rounded-lg w-auto">
                {children}
            </div>
        </div>
    )
}

export default Modal
