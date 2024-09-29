import React, { useEffect, useState } from 'react'
import Border from '../border/Border'
import NewFilmList from '../newfilm/NewFilmList'
import LoadingSpinner from '../Ui/LoadingSpinner'

const Mosnew = () => {
  const [datas, setdata] = useState([])
  const [loding, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    fetch('https://online-ec9d2-default-rtdb.firebaseio.com/moves.json')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const data = []
        for (const key in res) {
          if (
            new Date(res[key].newdate).getFullYear() ===
              new Date().getFullYear() &&
            res[key].type === 'film'
          ) {
            data.push({
              name: res[key].name,
              url: res[key].url,
              number: res[key].number,
              date: res[key].date,
              type: res[key].type,
              id: key,
              title: res[key].title,
            })
          }
        }
        setloading(false)
        setdata(data)
      })
  }, [setdata])
  console.log(datas)

  return (
    <div style={{ alignItems: 'center', textAlign: 'center' }}>
      <Border data={' اجدد الافلام'} />
      {loding && <LoadingSpinner />}{' '}
      {datas.map((data, index) => {
        return (
          <NewFilmList
            name={data.name}
            img={data.url}
            id={data.id}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default Mosnew
