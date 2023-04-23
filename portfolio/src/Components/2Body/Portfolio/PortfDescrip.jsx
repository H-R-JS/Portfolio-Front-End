import React from "react";
import { Link } from "react-router-dom";

export const PortfDescrip = () => {
  return (
    <div className="descrip-container">
      <p>Le dossier est suivit par le cv du sujet en question:</p>
      <Link to="" className="cv-link">
        Curriculum vitae
      </Link>
    </div>
  );
}; /**Le sujet fut preuve de bonne volonté, et décida de partager ses projets
        web. Aucun contenu ne semble problématique, ni ne contredit aucunement la loi,
        il est tout de même conseillé d'y observer chaque parti avec prudence.
        Tout signalement constructif et non-abusif sera acceuilli par l'entreprise, */
