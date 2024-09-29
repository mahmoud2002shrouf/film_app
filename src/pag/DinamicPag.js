import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './Dinamic.module.css'
import NewFilmItem from '../newfilm/NewFilmItem'
import Comment from '../comment/Comment'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../comment/Comments.'
import Allfilm from './Allfilm'
import Numitem from '../Al.js/Numitem'

const DinamicPag = (props) => {
  const params = useParams()
  const [dataitem, setdataitem] = useState({})
  const match = useRouteMatch()
  console.log( match );
  const id = params.mainid
  useEffect(() => {
    fetch('https://online-ec9d2-default-rtdb.firebaseio.com/moves.json')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        let data = {}
        for (const key in res) {
          if (key === id) {
            data = {
              name: res[id].name,
              url: res[id].url,
              number: res[id].number,
              date: res[id].date,
              type: res[id].type,
              id: key,
              title: res[id].title,
            }
          } else {
            console.log('')
          }
        }
        setdataitem(data)
      })
  }, [setdataitem, id])

  return (
    <div className={classes.full}>
      <div
        className={classes.fulldiv}
        style={{
          backgroundImage: `url(${dataitem.url})`,
        }}
      >
        <div className={classes.imgs}>
          <div>
            <h2 style={{ marginBottom: 50 }}>{dataitem.name} مسلسل</h2>
            <p className={classes.top}>تاريخ الاضافة {dataitem.date}</p>
            <p className={classes.p}>{dataitem.title}</p>
          </div>
          <div>
            <img src={dataitem.url} className={classes.imgg} />
          </div>
          {/* <NewFilmItem className={classes.new} /> */}
        </div>

        <NewFilmItem className={classes.new} />
      </div>

      <Numitem num={dataitem.number} />

      <Comment id={id} />

      <Route path={match.path} exact>
        <div className={classes.lodes}>
          <Link className={classes.lode} to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments id={id} />
      </Route>
    </div>
  )
}

export default DinamicPag
