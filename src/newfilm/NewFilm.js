import React, { useEffect, useState } from 'react'
import classes from './Films.module.css'
import NewFilmList from './NewFilmList'
import LoadingSpinner from '../Ui/LoadingSpinner'

const NewFilm = (props) => {
  const [datafetch, setdatasetch] = useState([])
  const [loding, setloding] = useState(false)

  useEffect(() => {
    setloding(true)
    fetch('https://online-ec9d2-default-rtdb.firebaseio.com/moves.json')
      .then((respons) => {
        return respons.json()
      })
      .then((res) => {
        const datas = []
        for (const key in res) {
          if (
            new Date(res[key].newdate).getFullYear() ===
              new Date().getFullYear() &&
            res[key].type === 'mos'
          ) {
            datas.push({
              name: res[key].name,
              url: res[key].url,
              number: res[key].number,
              date: res[key].date,
              type: res[key].type,
              id: key,
              title: res[key].title,
              newdate: res[key].newdate,
            })
          }
        }
        setloding(false)

        setdatasetch(datas)
      })
  }, [setdatasetch])
  console.log(datafetch)

  return (
    <div className={classes.border}>
      {loding && <LoadingSpinner />}
      {datafetch.map((data, index) => {
        return (
          <NewFilmList
            name={data.name}
            img={data.url}
            key={index}
            id={data.id}
          />
        )
      })}
    </div>
  )
}

export default NewFilm
