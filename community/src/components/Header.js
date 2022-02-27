import React from 'react'
import './css/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import AssignmentIcon from '@material-ui/icons/Assignment';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"

const Header = () => {
  return (
    <div className="comm__header">
        <div className="header__content">
            <div className="header__logo">
                <img src="https://video-public.canva.com/VAD8lt4jPyI/v/ec7205f25c.gif" alt="community logo" />
            </div>
            <div className='header__icons'>
                <div className="header__icon"><HomeIcon /></div>
                <div className="header__icon"><FeaturedPlayListIcon /></div>
                <div className="header__icon"> <AssignmentIcon /> </div>
                <div className="header__icon"><PeopleAltOutlinedIcon /></div>
                <div className="header__icon"><NotificationsOutlinedIcon /></div>
            </div>
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder='search queries' />
            </div>
            <div className="header__rem">
                <Avatar />
            </div>
            <Button>Add a Question</Button>
        </div>
    </div>
  )
}

export default Header