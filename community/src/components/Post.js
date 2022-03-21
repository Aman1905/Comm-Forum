import React, {useState} from 'react'
import './css/Post.css'
import {Avatar} from "@material-ui/core"
import {ArrowUpwardOutlined, ArrowDownwardOutlined, RepeatOutlined, ChatBubbleOutlined,ShareOutlined, MoreHorizOutlined} from "@material-ui/icons"
import CloseIcon from '@material-ui/icons/Close';
import {Modal} from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Post = () => {

  const [isModalOpen, setModalOpen] = useState(false)
  const Close = (<CloseIcon />)

  return (
    <>
      <div className="post">
        <div className="post__info">
          <Avatar />
          <h4>User Name</h4>
          <small>Timestamp</small>
        </div>
        <div className="post__body">
          <div className="post__question">
            <p>This is a Test Question</p>
            <button className="post__btnAnswer" onClick={() => setModalOpen(true)}>Answer</button>
            <Modal open={isModalOpen}
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
              <div className='modal__question'> 
                <h1>This is Test Question</h1>
                <p>asked by <span className='name'>UserName</span> on <span className='name'>Timestamp</span> </p>
              </div>
              <div className='modal__answer'>
                <ReactQuill placeholder='Enter your answer' />
              </div>
              <div className='modal__button'>
                <button className='cancle' onClick={() => setModalOpen(false)}>Cancel</button>
                <button className='add' type='submit'>Add a Question</button>
              </div>
             </Modal>
          </div>
        </div>
        <div className="post__footer">
          <div className="post__footerAction">
            <ArrowUpwardOutlined />
            <ArrowDownwardOutlined />
          </div>
          <RepeatOutlined />
          <ChatBubbleOutlined />
          <div className="post__footerLeft">
            <ShareOutlined />
            <MoreHorizOutlined />
          </div>
        </div>
        <p style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0"
        }}>1 Answer</p>
        <div style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray"
        }} className="post__answer">

         <div style={{
           display: "flex",
           flexDirection: "column",
           width: "100%",
           padding: "10px 5px",
           borderTop: "1px solid lightgray"
           }} className="post-answer-container">

           <div style={{
             display: "flex",
             alignItems: "center",
             marginBottom: "10px",
             fontSize: "12px",
             fontWeight: 600,
             color: "#888"
             }} className='post-answered'>
             <Avatar />

             <div style={{
               margin: "0px 10px",
             }} className='post-info'>
               <p>User Name</p>
               <span>Timestamp</span>
             </div>
           </div>
           <div className='post-answer'>
             This is Test Answer
           </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Post