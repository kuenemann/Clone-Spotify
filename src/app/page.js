import React from "react";
import styles from "../styles/page.module.scss";

const Accueil = () => {
  return (
    <div className={styles.conteneur}>
      <main className={styles.principal}>
        <section className={styles.contenu}>
          <div className={styles.sectionEnVedette}>
            <h2 className={styles.titreSection}>Dernières sorties</h2>
            <ul className={styles.listeEnVedette}>
              {[1, 2, 3, 4, 5].map((index) => (
                <li className={`${styles.elementEnVedette} ${styles.bloc}${index}`}>
                  <div className={styles.boiteArtiste}>
                    <img
                      className={styles.imageArtiste}
                      src="" // Chemin de l'image de l'artiste
                      alt="Artiste"
                    />
                    <p className={styles.nomArtiste}>Nom de l'artiste</p>
                    <p className={styles.infoArtiste}>Informations sur l'artiste</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sectionPopulaire}>
            <h2 className={styles.titreSection}>Listes de lecture populaires</h2>
            <ul className={styles.listePopulaire}>
              {[1, 2, 3, 4, 5].map((index) => (
                <li className={`${styles.elementPopulaire} ${styles.bloc}${index}`}>
                  <div className={styles.boiteArtiste}>
                    <img
                      className={styles.imageArtiste}
                      src="" // Chemin de l'image de l'artiste
                      alt="Artiste"
                    />
                    <p className={styles.nomArtiste}>Nom de l'artiste</p>
                    <p className={styles.infoArtiste}>Informations sur l'artiste</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sectionNouvellesSorties}>
            <h2 className={styles.titreSection}>Nouvelles sorties</h2>
            <ul className={styles.listeNouvellesSorties}>
              {[1, 2, 3, 4, 5].map((index) => (
                <li className={`${styles.elementNouvellesSorties} ${styles.bloc}${index}`}>
                  <div className={styles.boiteArtiste}>
                    <img
                      className={styles.imageArtiste}
                      src="" // Chemin de l'image de l'artiste
                      alt="Artiste"
                    />
                    <p className={styles.nomArtiste}>Nom de l'artiste</p>
                    <p className={styles.infoArtiste}>Informations sur l'artiste</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.piedPage}>
        <p className={styles.textePiedPage}>© 2023 Votre Société. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Accueil;
