import React, { useEffect } from 'react';
import Particles from './Particles'
import logo from './logo.png';
import SocialBar from './SocialBar'
import Links from './LINKS'
import style from './App.module.scss';

const App = () => {
  useEffect(() => {
    console.log(`Checkout my GitHub at ${Links.gitHub}`)
  }, [])

  return (
    <div className={style.App}>
      <Particles />
      <header className={style.App__header}>
        <img src={logo} className={style.App__logo} alt="logo" />
        <p className={style.App__summary}>
          Experienced team leader with a proven track record of building high quality, large scale and complex front end systems from scratch.
          <br/>
          Skilled in FrontEnd, NodeJS, Java and Management.
        </p>
      </header>
      <SocialBar />
    </div>
  );
}

export default App;
