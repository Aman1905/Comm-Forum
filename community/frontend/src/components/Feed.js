import React from 'react'
import CommunityBox from './CommunityBox'
import Post from './Post'
import './css/Feed.css'

const Feed = () => {
    return (
        <div className='comm__feed'>
            <CommunityBox />
            <Post />
        </div>
    )
}

export default Feed