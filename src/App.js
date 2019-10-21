import React, { useEffect } from 'react';
import Particles from './Particles'
import SocialBar from './SocialBar'
import Timeline from './Timeline'
import Links from './LINKS'
import logo from './logo.png';
import style from './App.module.scss';
import Footer from './Footer';

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
        <img className={style.App__summary__profile} src='https://secure.gravatar.com/avatar/ae59dab97c135533ccd77689d9e8d546?size=200' alt='my profile' />
      </header>
      <Timeline />
      <SocialBar />
      <Footer />
    </div>
  );
}

export default App;
