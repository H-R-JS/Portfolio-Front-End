import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const AboutText = () => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView]);

  const variSkillPer = {
    hidden: { transform: "scaleY(1)" },
    visible: {
      transform: "scaleY(0)",
      transition: {
        duration: 1,
        delay: 0.5,
        transitionTimingFunction: "ease-out",
      },
    },
  };
  return (
    <div className="about-text">
      <motion.div
        ref={refFade}
        variants={variSkillPer}
        initial="hidden"
        animate={controlFade}
        className="about-box-hidden"
      />
      <p>
        Après observation, le sujet est un developpeur junior en autodiacte, il
        est fortement attiré par la programmation depuis quelques années, il
        passe une parti de sa journée à crée et apprendre, malgré les problèmes
        et obstacles le sujet persiste dans le domaine, il arrive à se frayer un
        chemin à travers tout le contenu d'apprentissage que peut offrir
        internet. <br />
        <br /> Très créatif, les idées ont tendances à germées de manière plutôt
        hasardeuse, l'apprentissage des langages de programmation lui à permis
        de gagner en organisation.
      </p>
    </div>
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
