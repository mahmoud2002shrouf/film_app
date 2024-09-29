import React, { useContext, useEffect, useState } from 'react'
import Border from '../border/Border'
import { Context } from '../context/ContextProvider'
import NewFilmList from '../newfilm/NewFilmList'
import LoadingSpinner from '../Ui/LoadingSpinner'

const SearchPag = () => {
  const [datas, setdata] = useState([])
  const [loding, setloading] = useState(false)
  const ctx = useContext(Context)
  const dataSearch = ctx.datasearch
  useEffect(() => {
    setloading(true)
    fetch('https://online-ec9d2-default-rtdb.firebaseio.com/moves.json')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const data = []
        for (const key in res) {
          if (res[key].name.includes(`${dataSearch}`)) {
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
  }, [setdata, dataSearch])
  console.log(datas)

  return (
    <div style={{ alignItems: 'center', textAlign: 'center' }}>
      <Border data={' نتائج البحث '} />
      {loding && <LoadingSpinner />}
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

export default SearchPag
