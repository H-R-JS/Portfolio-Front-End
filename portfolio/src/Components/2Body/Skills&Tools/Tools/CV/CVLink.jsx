import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Skills } from "../../Skills/Skills";
import pdf from "./DEMISSION_2.pdf";

export const CVLink = ({ theme, variSTChildren }) => {
  return (
    <motion.article variants={variSTChildren}>
      <Link target="_blank" to={pdf}>
        LIJDUHQ
      </Link>
    </motion.article>
  );
}; /**



Le sujet fut preuve de bonne volonté, et décida de partager ses projets
        web. Aucun contenu ne semble problématique, ni ne contredit aucunement la loi,
        il est tout de même conseillé d'y observer chaque parti avec prudence.
        Tout signalement constructif et non-abusif sera acceuilli par l'entreprise, */
