import React from "react";
import styles from "../../styles/page.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <img
          className={styles.logoImage}
          src="/assets/spotify.png"
          alt="Spotify Logo"
          width="50"
          height="50"
        />
      </a>

      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Accueil
            </a>
          </li>

          <li className={styles.navbarItem}>Parcourir</li>
          <li className={styles.navbarItem}>Rechercher</li>
          <li className={styles.navbarItem}>Bibliothèque</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
