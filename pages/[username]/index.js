import { useRouter } from 'next//router'
import React from 'react'
import Navbar from '../../components/navbar';
import ProfileHeader from '../../components/profile/profile-header';
import ProfilePost from '../../components/profile/profile-post';

function Profile() {
    const router = useRouter()
    const username = router.query.username

    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="bg-gray-50 min-h-screen min-w-screen mt-14">
                <div className="mx-auto sm:max-w-[930px] flex flex-col mt-7">
                    <ProfileHeader isMe={username === 'myaccount'} />

                    <div className="grid grid-cols-6 gap-1 md:gap-6 mb-10">
                        {
                            [1, 2, 3, 4, 5, 6, 7].map((a) => (
                                <ProfilePost key={a}/>
                            ))
                        }

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile
