import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import SocialLinks from '../LINKS'
import style from './SocialBar.module.scss'

const Link = ({ icon, children }) => (
  <li className={style.SocialBar__item}>
    <a href={children}
      target="_blank"
      rel="noopener noreferrer">
      <FontAwesomeIcon className={style.SocialBar__item__icon} icon={['fab', icon]} />
    </a>
  </li>
)

const SocialBar = () => {
  return (
    <ul className={style.SocialBar}>
      <Link key={faGithub.iconName} icon={faGithub.iconName}>
        {SocialLinks.gitHub}
      </Link>
      <Link key={faLinkedinIn.iconName} icon={faLinkedinIn.iconName}>
        {SocialLinks.linkedIn}
      </Link>
    </ul>
  )
}

export default SocialBar