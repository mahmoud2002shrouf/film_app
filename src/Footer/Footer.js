import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.img}>
          <Link to="/main">
            <img
              src="https://s.3isk.video/wp-content/uploads/2021/01/logo-footer-1-1.png"
              alt="قصة عشق"
              className={classes.img}
            />
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link to="/Mosd">مسلسلات مدبلجة</Link>
            </li>
            <li>
              <Link to="/FilmsNew">أجدد الأفلام</Link>
            </li>

            <li>
              <Link to="/Mosnew"> أجدد المسلسلات</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>DMCA Policy</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms and Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes.theend}>
        <h3>
          جميع الحقوق محفوظةلـ<p>Mahmoud Shrouf</p>
        </h3>
      </div>
    </footer>
  )
}

export default Footer
