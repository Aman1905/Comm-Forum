import React, { useState } from 'react'
import './css/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import AssignmentIcon from '@material-ui/icons/Assignment';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from "@material-ui/core/Avatar"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import 'react-responsive-modal/styles.css'
import { ExpandMore } from '@material-ui/icons';

const Header = () => {

  const[isModalOpen, setModalOpen] = useState(false)
  const Close = (<CloseIcon />)


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
            <Button onClick={() => setModalOpen(true)}>Add a Question</Button>

            <Modal
             open={isModalOpen}
             closeIcon={Close}
             onClose={() => setModalOpen(false)}
             closeOnEsc
             center
             closeOnOverlayClick={false}
             styles ={{
                 overlay: {
                     height: "auto",
                 }
             }}>
                <div className='modal__title'>
                    <h5>Add Question</h5>
                    <h5>Share Link</h5>
                </div>
                <div className='modal__info'>
                    <Avatar className='avatar' />
                    <div className='modal__scope'>
                        <PeopleAltOutlinedIcon />
                        <p>Public</p>
                        <ExpandMore />
                    </div>
                </div>
                <div className="modal__Field">
                    <Input />
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header