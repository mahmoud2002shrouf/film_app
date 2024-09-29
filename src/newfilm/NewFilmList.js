import React from 'react'
import Card2 from './ui/Card2'
import classes from './List.module.css'
import video from '../img/play-button.png'
import { Link } from 'react-router-dom'

const NewFilmList = (props) => {
  const x = props.img
  const handelclick = () => {
    console.log('sososo')
  }

  return (
    <Link to={`/main/${props.id}`}>
      <Card2 style={{ display: 'inline' }}>
        <div
          onClick={handelclick}
          className={classes.fulldiv}
          style={{
            backgroundImage: `url(${x})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'inline-block',
            width: 246,
            height: 370,
            opacity: 1,
          }}
        >
          <div>
            <img
              className={classes.imgvidew}
              src={video}
              // style={{ backgroundSize: 'cover' }}
            />
          </div>
          <p className={classes.para}>{props.name}</p>
        </div>
      </Card2>
    </Link>
  )
}

export default NewFilmList
