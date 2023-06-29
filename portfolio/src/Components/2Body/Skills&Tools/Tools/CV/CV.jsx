import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagramSquare,
  FaAlignJustify,
} from "react-icons/fa";

export const CV = () => {
  return (
    <main className="cv-page">
      <header className="header-cv">
        <h1>JORDY ROCACHER</h1>
        <h3>FRONT END DEVELOPER</h3>
      </header>
      <aside className="aside-cv">
        <h3>Contact</h3>
        <article className="contact-cv-container">
          <ul>
            <li>
              <FaEnvelope className="contact-cv-icon" />
              jprogpro7@outlook.com
            </li>
            <li>
              <FaInstagramSquare className="contact-cv-icon" />
              jordy.rocacher
            </li>
            <li>
              <FaLinkedin className="contact-cv-icon" />
              linkedin.com/in/jr-dev-front
            </li>
          </ul>
        </article>
        <h3>Langue</h3>
        <article>
          <ul>
            <li>Français (Origine)</li>
            <li>Anglais (B1)</li>
          </ul>
        </article>
        <h3>Atouts</h3>
        <article>
          <ul>
            <li>Perseverant</li>
            <li>Autonome</li>
            <li>Conciliant</li>
            <li>Flexible</li>
            <li>Curieux</li>
          </ul>
        </article>
      </aside>
      <section className="section-cv">
        <div className="cv-background-icon">
          <FaAlignJustify />
        </div>

        <h3>Résumé</h3>
        <article>
          <p>
            Passionné par les langages de programmation, j'ai appris seul dans
            mon temps libre la programmation de site web, après avoir apprit les
            bases j'ai voulu développer encore plus loin, me créant de
            l'expérience dans plus particulièrement le framework React.Js,
            créant ainsi de vrai site structuré avec des notions d'UI/UX.
            Souhaitant en découvrir plus, vouloir persévérer dans ce mileu, je
            souhaite travailler et passer mes journées dans un IDE, des outils
            de Design tels que Figma, à découvrir d'autres technologies... de
            débutant je souhaite monter les échelons d'expérience et devenir
            expert.
          </p>
        </article>
        <h3>Expérience</h3>
        <article>
          <h4>MEUTE2RASTS</h4>
          <ul>
            <li>
              <p>
                Création du site web et de sa structure, intregration, design,
                responsive, UI/UX, SEO.
              </p>
            </li>
            <li>
              <p>
                Plus l'ajout d'une fonctionalité de post et d'affichage d'avis
                avec firebase
              </p>
            </li>
          </ul>
          <h4>PHOTOGRALEXPHIE</h4>
          <ul>
            <li>
              <p>
                Création du site web et de sa structure, intregration, design,
                responsive, UI/UX, SEO.
              </p>
            </li>
            <li>
              <p>Création d'un carousel avec react.js</p>
            </li>
          </ul>
          <h4>NETFLIX CLONE</h4>
          <ul>
            <li>
              <p>
                Création du site web et de sa structure, intregration, design,
                responsive, UI/UX, SEO.
              </p>
            </li>
            <li>
              <p>Création d'un carousel avec react.js</p>
            </li>
          </ul>
        </article>
        <h3>Compétences</h3>
        <article>
          <h4>Front End</h4>
          <ul>
            <li>HTLM5 & CSS3 </li>
            <li>JAVASCRIPT </li>
            <li>REACT </li>
            <li>BOOTSTRAP</li>
            <li>SASS</li>
          </ul>
          <h4>Back End</h4>
          <ul>
            <li>FIREBASE</li>
          </ul>
          <h4>Outils</h4>
          <ul>
            <li>Git bash</li>
            <li>Github</li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>IA illustrator (Débutant)</li>
          </ul>
        </article>
      </section>
    </main>
  );
};
