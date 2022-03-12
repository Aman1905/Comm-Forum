import React from 'react'
import './css/Post.css'
import {Avatar} from "@material-ui/core"
import {ArrowUpwardOutlined, ArrowDownwardOutlined, RepeatOutlined, ChatBubbleOutlined,ShareOutlined, MoreHorizOutlined} from "@material-ui/icons"

const Post = () => {
  return (
    <div className="post">

      <div className='post__info'>
        <Avatar />
        <h4> User Name </h4>
        <small>TimeStamp</small>
      </div>

      <div className="post__body">
        <p>This is a Test Question</p>
        <button className='post__btnAnswer'>Answer</button>
      </div>

      <div className="post__footer">
        <div className="post__footerActions">
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

      <div className="post__answer" style={{
        margin: "5px 0px 0px 0px",
        padding: "5px 0px 0px 20px",
        borderTop: "1px solid lightgray"}}>

        <div className="post__answer-container" style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "10px 5px",
          borderTop: "1px solid lightgray"
        }}>

          <div className="post-answered" style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          fontSize: "12px",
          fontWeight: "600",
          color: "#888"}}>
            <Avatar />

            <div className="post__info" style={{ margin: "0px 10px"}}>
              <p>UserName</p>
              <span>TimeStamp</span>
            </div>
          </div>
          <div className="post__answer">
            This is Test Answer
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post