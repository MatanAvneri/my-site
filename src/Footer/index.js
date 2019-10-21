import React from 'react'
import style from './Footer.module.scss'

const THIS_YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className={style.Footer}>
      © {THIS_YEAR} Matan Avneri
    </footer>
  )
}

export default Footer
