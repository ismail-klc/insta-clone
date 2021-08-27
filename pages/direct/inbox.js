import React from 'react'
import MessageBox from '../../components/message-box'
import Navbar from '../../components/navbar'

function Inbox() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="bg-gray-50 min-h-[92vh] min-w-screen mt-14">
                <div className="mx-auto sm:max-w-[930px] flex flex-col mt-7">
                    <MessageBox />
                </div>
            </main>
        </div>
    )
}

export default Inbox
