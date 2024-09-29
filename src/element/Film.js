import React, { useEffect, useState } from 'react'
import Filmitem from './Filmitem'
import classes from './Film.module.css'
import LoadingSpinner from '../Ui/LoadingSpinner'

const Film = (props) => {
  const [data, setdata] = useState([])
  const [loding, setloding] = useState(false)
  useEffect(() => {
    setloding(true)
    fetch('https://online-ec9d2-default-rtdb.firebaseio.com/moves.json')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        const datas = []
        for (const key in res) {
          if (res[key].type === 'trkey') {
            datas.push({
              name: res[key].name,
              url: res[key].url,
              number: res[key].number,
              date: res[key].date,
              type: res[key].type,
            })
          }
          setloding(false)

          setdata(datas)
        }
      })
  }, [setdata])
  console.log(data)
  return (
    <section className={classes.imgdiv}>
      {loding && <LoadingSpinner />}

      {data.map((data, index) => (
        <Filmitem img={data.url} name={data.name} key={index} />
      ))}
    </section>
  )
}

export default Film
