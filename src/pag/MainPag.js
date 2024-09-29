import React from 'react'
import Border from '../border/Border'
import Film from '../element/Film'
import MainHedwr from '../heder/MainHedwr'
import img from '../img/fill.png'

import Footer from '../Footer/Footer'
import NewFilm from '../newfilm/NewFilm'
import { Context } from '../context/ContextProvider'
import { useContext } from 'react'
import Search from '../search/Search'
import Form from '../Form/Form'
const data = ['اجدد المسلسلات', 'جميع المسليلات التركية']

function MainPag(props) {
  const ctx = useContext(Context)
  return (
    <React.Fragment>
      <Border data={data[0]} img={img} />
      <NewFilm />
      <Border data={data[1]} />

      <Film />
    </React.Fragment>
  )
}

export default MainPag
