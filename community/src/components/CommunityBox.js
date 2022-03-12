import React from 'react'
import {Avatar} from '@material-ui/core'
import './css/CommunityBox.css'

const CommunityBox = () => {
    return (
        <div className="commBox">
            <div className="commBox__info">
                <Avatar />
            </div>
            <div className="commBox__comm">
                <h5>What is your question or link ?</h5>
            </div>
        </div>
    )
}

export default CommunityBox