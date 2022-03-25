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

  const [isModalOpen, setModalOpen] = useState(false)
  const [inputUrl, setInputUrl] = useState("")
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
                    <Input type='text' placeholder='Write your Question here' />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <input type='text' value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} placeholder='Optional: Paste your link here' 
                        style={{
                            margin: "5px 0px",
                            border: "1px solid lightgray",
                            padding: '10px',
                            outline: '2px solid #000'
                        }} />
                        {
                            inputUrl !== "" && <img style={{height: '40vh', objectFit: 'contain'}} src={inputUrl} alt={inputUrl} />
                        }
                    </div>
                </div>
                <div className='modal__buttons'>
                    <button className='cancle' onClick={() => setModalOpen(false)}>Cancel</button>
                    <button className='add' type='submit'>Add a Question</button>
                </div>
            </Modal>
            </div>
        </div>
    </div>
  )
}

export default Header