import { motion } from "framer-motion";

export const AboutText = () => {
  return (
    <div className="about-text">
      <div className="text-box">
        <AnimatedText
          text="Après observation, le sujet est un developpeur junior en autodiacte, 
        il est fortement attiré par la programmation depuis quelques années, il passe une parti de sa journée à crée et apprendre,
        malgré les problèmes et obstacles le sujet persiste dans le domaine, il arrive à se frayer un chemin à
        travers tout le contenu d'apprentissage que peut offrir internet."
        />
      </div>
      <div className="text-box">
        <AnimatedText text="Je suis créatif en effet" />
      </div>
      <div className="text-box">
        <AnimatedText text="Je suis créatif en effet" />
      </div>
    </div>
  );
};

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.div>
      {words.map((word, index) => {
        return (
          <motion.span key={index} style={{ marginRight: "7px" }}>
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

/**Je suis un développeur junior, passioné par la progammation depuis
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
        dans tous les sens. */
