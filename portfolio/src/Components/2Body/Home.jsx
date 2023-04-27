import React, { useContext } from "react";

const theme = {
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
};

const ThemeContext = React.createContext(theme);

function ThemedText({ children }) {
  const value = useContext(ThemeContext);
  return (
    <p style={value} className="h-text-2">
      {children}
    </p>
  );
}

export class Home extends React.Component {
  render() {
    return (
      <ThemeContext.Provider /*value={theme.black}*/>
        <div className="home-box" id="home">
          <div className="home-text">
            <p className="h-text-1">Bonjour, je suis </p>
            <div className="h-text-square">
              <ThemedText>
                Jordy Rocacher <br />
                Developpeur Front End
              </ThemedText>
            </div>
            <p className="h-text-3">
              en autodidacte, j'ai appris le développement web seul, sans
              formation ni diplôme, uniquement avec ma motivation et l'envie de
              concevoir et créer à travers les langages de programmation
            </p>
          </div>
          <div className="black-square" />
        </div>
        <AboutMe />
      </ThemeContext.Provider>
    );
  }
}

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-text-container">
        <h2>À propos de moi </h2>
        <p>
          Je suis un développeur junior, passioné par la progammation depuis
          quelques années, après avoir découvert celle-ci de manière hasardeuse.
          Depuis j'ai la volonté d'en apprendre plus chaque jour, d'optimiser ma
          façon de coder et de trouver et créer des design intéressant, que ce
          soit pour moi, ou pour l'utilisateur. Je n'ais aucune formation, aucun
          diplôme, avec une réel envie d'apprendre par moi-même, de me frayer un
          chemin à travers tous les tutoriels d'internet, pour développer mes
          propres idées tout en m'inspirant. <br />
          <br />
          La programmation m'a beaucoup apporter en terme de mode de pensée, les
          débuts ne fut pas facile, mais l'abandon ne faisait en aucun cas parti
          de mes options, j'ai donc persevérer. Je suis de nature créatif, la
          programmation m'a permit de m'organiser dans mes pensées, de me
          permettre de me concentrer sur une chose à la fois, de ne pas partir
          dans tous les sens.
        </p>
      </div>
      <div className="about-design-presentation"></div>
    </div>
  );
};
