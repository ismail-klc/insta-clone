import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/navbar'
import PostDetail from '../../components/post-detail'
import ProfilePost from '../../components/profile/profile-post'

function SinglePost() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div className="flex flex-col">
            <Navbar />

            <main className="bg-gray-50 min-h-screen min-w-screen mt-14">
                <div className="mx-auto w-full lg:max-w-[930px] flex flex-col mt-7">
                    <PostDetail />

                    <hr className="my-10"/>

                    <div className="mb-3 font-semibold text-sm">
                        <span >accountname</span>
                        <span className=" text-gray-500">'dan diğer gönderiler</span>
                    </div>

                    <div className="grid grid-cols-6 gap-1 md:gap-6 mb-10 ">
                        {
                           Array(6).fill(null).map((_, a) => (
                                <ProfilePost key={a}/>
                            ))
                        }

                    </div>
                </div>
            </main>
        </div>
    )
}

export default SinglePost
