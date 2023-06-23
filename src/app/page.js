import logo from "../img/spotify.svg.png";

import React from "react";
import styles from "../styles/page.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src={logo} // Ajoutez le chemin de l'image pour le logo
          alt="Spotify Logo"
        />
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>Accueil</li>
            <li className={styles.navbarItem}>Parcourir</li>
            <li className={styles.navbarItem}>Rechercher</li>
            <li className={styles.navbarItem}>Bibliothèque</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          {/* Ajoutez du contenu pour la barre latérale */}
        </aside>

        <section className={styles.content}>
          <div className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Dernières sorties</h2>
            {/* Affichez les dernières sorties */}
          </div>

          <div className={styles.popularSection}>
            <h2 className={styles.sectionTitle}>
              Listes de lecture populaires
            </h2>
            {/* Affichez des listes de lecture populaires */}
          </div>

          {/* Ajoutez d'autres sections et composants pour afficher plus de contenu */}
        </section>
      </main>

      <footer className={styles.footer}>
        {/* Ajoutez les informations du pied de page */}
      </footer>
    </div>
  );
};

export default HomePage;
