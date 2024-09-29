import React, { useContext, useEffect, useState } from 'react'
import ContextProvider, { Context } from '../context/ContextProvider'
import Commentitem from './Commentitem'
import LoadingSpinner from '../Ui/LoadingSpinner'

const Commentddi = (props) => {
  const [datas, setdata] = useState([])
  const [lodein, setloding] = useState(false)
  const [length, setlength] = useState(false)

  useEffect(() => {
    setloding(true)
    fetch(
      `https://online-ec9d2-default-rtdb.firebaseio.com/comments/${props.id}.json`,
    )
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const data = []
        console.log(res)
        for (const key in res) {
          data.push({
            name: res[key].name,
            email: res[key].email,
            comment: res[key].comment,
            date: res[key].Date,
          })
        }
        setdata(data)
        setloding(false)
        if (data.length === 0) {
          setlength(true)
        }
      })
  }, [setdata, props.id])

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center' }}>{lodein && <LoadingSpinner />}</div>
      {length && (
        <div
          style={{
            textAlign: 'center',
            width: 1000,
            height: 200,
            boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.085)',
            marginTop: 20,
            marginLeft: '17%',
            border: '1px solid rgba(0, 0, 0, 0.186)',
            fontSize: 22,
          }}
        >
          <p style={{ marginTop: 50 }}>no comments ...</p>
        </div>
      )}
      {datas.map((data) => {
        return (
          <Commentitem
            name={data.name}
            date={data.date}
            email={data.email}
            comment={data.comment}
          />
        )
      })}
      <ContextProvider id={props.id} />
    </React.Fragment>
  )
}

export default Commentddi
