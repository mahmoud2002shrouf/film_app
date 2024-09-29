import React from 'react'
import Border from '../border/Border'
import FormComment from './FormComment'
import classes from './Comment.module.css'

const Comment = (props) => {
  const x = 'التعليقات'
  return (
    <div className={classes.comment}>
      <Border data={x} />
      <div className={classes.Border}>
        <div className={classes.com}>
          <h4>يسعدنا معرفة أرئكم</h4>
          <p>قم بالتسجيل وإستمتع بمشاركة أرائك أكثر سهولة</p>

          <FormComment id={props.id} />
        </div>
      </div>
    </div>
  )
}

export default Comment
