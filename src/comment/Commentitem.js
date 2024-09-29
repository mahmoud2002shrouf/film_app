import React from 'react'
import classes from './CommentItem.module.css'

const Commentitem = (props) => {
  const x = new Date(props.date)
  return (
    <div className={classes.ppu}>
      <div className={classes.fulldiv}>
        <div className={classes.data}>
          <h4>{props.name}</h4>
          <p>{x.toLocaleString()}</p>
          <h6>{props.comment}</h6>
        </div>
        <div className={classes.name}>{props.email[0]}</div>
      </div>
    </div>
  )
}

export default Commentitem
