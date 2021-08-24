import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/navbar'
import PostDetail from '../../components/post-detail'

function SinglePost() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div className="flex flex-col">
            <Navbar />

            <main className="bg-gray-50 min-h-screen min-w-screen mt-14">
                <div className="mx-auto w-full lg:max-w-[930px] flex flex-row space-x-5 mt-7">
                    <PostDetail />
                </div>
            </main>
        </div>
    )
}

export default SinglePost
