import React, { useEffect } from 'react'
import Border from '../border/Border'
import classes from './Num.module.css'

const Numitem = (props) => {
  const x = props.num
  const c = []
  for (var i = 0; i <= x; i++) {
    c.push(i)
  }
  console.log(c)
  return (
    <div>
      <Border data={'الحلقات'} />
      <div className={classes.fulldiv}>
        {c.map((c) => {
          return (
            <div className={classes.div}>
              <h3>رقم الحلقة</h3>
              <h1>{c}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Numitem
