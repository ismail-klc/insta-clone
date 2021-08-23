import { useRouter } from 'next/router'
import React from 'react'

function SinglePost() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div>
            
        </div>
    )
}

export default SinglePost
