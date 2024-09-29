import React, { useState } from 'react'
import classes from './Filmitem.module.css'
import Card from '../Ui/Card'

const Filmitem = (props) => {
  const [show,setshow]=useState(false)
  return (
    <Card >
      <div className={classes.bak}>
      <img src={props.img} alt={props.name} className={classes.img}  />
        <p className={classes.par}>{props.name}</p>
        </div>
    </Card>
  )
}

export default Filmitem
