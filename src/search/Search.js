import React, { useContext, useRef } from 'react'
import img from '../img/search.png'
import classes from './Search.module.css'
import { Context } from '../context/ContextProvider'
import { Link } from 'react-router-dom'
const Search = () => {
  const ctx = useContext(Context)
  const Search = useRef()
  const handelclic = () => {
    ctx.setdataing(Search.current.value)

    console.log(ctx.datas)
  }
  return (
    <React.Fragment>
      <div className={classes.fulldiv}>
        <Link to="search" onClick={ctx.close}>
          <img src={img} alt="serach" onClick={handelclic} />
        </Link>
        <input placeholder="يمكنك البحث عن مسلسل من هنا" ref={Search} />
      </div>
      <div className={classes.background} onClick={ctx.close}></div>
    </React.Fragment>
  )
}

export default Search
