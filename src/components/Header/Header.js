import React from "react";
import styles from "../../styles/page.module.scss";
/* import   "../../styles/Header.module.scss"; */

const Header = () => {
  return (
    <header className={styles.header}>
<img className="imageTest" src="/assets/spotify.png" alt="Spotify Logo"  />
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>Accueil</li>
          <li className={styles.navbarItem}>Parcourir</li>
          <li className={styles.navbarItem}>Rechercher</li>
          <li className={styles.navbarItem}>Bibliothèque</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
