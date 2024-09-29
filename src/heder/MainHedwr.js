import React, { useContext } from 'react'
import classes from './Main.module.css'
import user from '../img/user (1).png'
import search from '../img/search.png'

import { Link, NavLink } from 'react-router-dom'
import { Context } from '../context/ContextProvider'
const MainHedwr = (props) => {
  const ctx = useContext(Context)
  return (
    <header className={classes.header}>
      <div className={classes.icon}>
        <ul className={classes.navicon}>
          <li className={classes.icon1}>
            <a onClick={ctx.showboxT}>
              <img className={classes.search} src={user} alt="soso" />
            </a>
          </li>
          <li className={classes.icon2}>
            <a onClick={ctx.show}>
              <img className={classes.user} src={search} alt="soso" />
            </a>
          </li>
        </ul>
      </div>
      <nav class="navbar navbar-expand-lg ">
        <ul class="navbar-nav" className={classes.line}>
          <li class="nav-item">
            <NavLink
              className={classes.button}
              activeClassName={classes.actives}
              aria-current="page"
              to="/All"
            >
              جميع المسلسلات
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={classes.button}
              to="/Mosnew"
              activeClassName={classes.actives}
            >
              أجدد المسلسلات
            </NavLink>
          </li>
          <li class="nav-item" style={{ textAlign: 'center' }}>
            <NavLink
              className={classes.button}
              to="/FilmsNew"
              activeClassName={classes.actives}
            >
              أجدد الافلام
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink
              className={classes.button}
              to="/Mosd"
              activeClassName={classes.actives}
            >
              مسلسلات مدبلجة
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={classes.button}
              to="/"
              activeClassName={classes.actives}
            >
              قصة عشق
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/">
          <img
            className={classes.ash}
            src="https://s.3isk.video/wp-content/uploads/2021/01/3isk-logo.png"
          />
        </Link>
      </div>
    </header>
  )
}

export default MainHedwr
