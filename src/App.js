import React, { useEffect } from 'react';
import Particles from './Particles'
import SocialBar from './SocialBar'
import Timeline from './Timeline'
import Links from './LINKS'
import logo from './logo.png';
import style from './App.module.scss';

const App = () => {
  useEffect(() => {
    console.log(`Checkout my GitHub at ${Links.gitHub}`)
  }, [])

  return (
    <div className={style.App}>
      <header className={style.App__header}>
        <Particles />
        <p className={style.App__summary}>
          <img src={logo} className={style.App__logo} alt="logo" />
          Experienced team leader with a proven track record of building high quality, large scale and complex front end systems from scratch.
            <br />
          Skilled in FrontEnd, NodeJS, Java and Management.
          </p>
      </header>
      <Timeline />
      <SocialBar />
    </div>
  );
}

export default App;
