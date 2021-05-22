import React from 'react'
import Particles from 'react-particles-js';
import style from './Particles.module.scss'

const MyParticles: React.FC = () => {
  return (
    <Particles params={{
      fps_limit: 28,
      particles: {
        color: {
          value: '#53acc9'
        },
        line_linked: {
          color: '#53acc9',
          width: 2
        }
      }
    }} className={style.Particles} />
  )
}

export default MyParticles