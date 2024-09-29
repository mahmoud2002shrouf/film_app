import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPag from './pag/MainPag'
import MainHedwr from '../src/heder/MainHedwr'
import DinamicPag from '../src/pag/DinamicPag'
import Footer from './Footer/Footer'
import Allfilm from './pag/Allfilm'
import Mosnew from './pag/Mosnew'
import Filmsnew from './pag/Filmsnew'
import Mosd from './pag/Mosd'
import Search from './search/Search'
import { Context } from './context/ContextProvider'
import SearchPag from './pag/SearchPag'
import Form from './Form/Form'

const App = () => {
  const ctx = useContext(Context)

  return (
    <React.Fragment>
      <MainHedwr />
      {ctx.shows && <Search />}
      {ctx.showbox && <Form />}

      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main" exact>
          <MainPag />
        </Route>
        <Route path="/main/:mainid">
          <DinamicPag />
        </Route>
        <Route path="/All">
          <Allfilm />
        </Route>
        <Route path="/Mosnew">
          <Mosnew />
        </Route>
        <Route path="/FilmsNew">
          <Filmsnew />
        </Route>
        <Route path="/Mosd">
          <Mosd />
        </Route>
        <Route path="/search">
          <SearchPag />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App
