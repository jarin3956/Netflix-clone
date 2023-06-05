import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrollBackground(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrollBackground ? 'scroll-background' : ''}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix"
      />
      <div className="navbar__links">
        <div className="navbar__link">Home</div>
        <div className="navbar__link">TV Shows</div>
        <div className="navbar__link">Movies</div>
        <div className="navbar__link">New&Popular</div>
        <div className="navbar__link">MyList</div>
        <div className="navbar__link">Browse by Languages</div>
      </div>
      <div className="navbar__right-icons">
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
