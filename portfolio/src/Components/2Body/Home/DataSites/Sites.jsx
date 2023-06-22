const SProgDetails1 = () => {
  return (
    <ul className="ul-sites-detail">
      <li className="li-sites-detail">Html & CSS</li>
      <li className="li-sites-detail">SASS</li>
      <li className="li-sites-detail">Javascript</li>
      <li className="li-sites-detail">React</li>
      <li className="li-sites-detail">Firebase</li>
    </ul>
  );
};

const SProgDetails2 = () => {
  return (
    <ul className="ul-sites-detail">
      <li className="li-sites-detail">Html & CSS</li>
      <li className="li-sites-detail">SASS</li>
      <li className="li-sites-detail">Javascript</li>
      <li className="li-sites-detail">React</li>
    </ul>
  );
};

export const ArraySites = [
  { title: "Meute2Rats", classN: "li-sites", details: <SProgDetails1 /> },
  {
    title: "Photogralexphie",
    classN: "li-sites one",
    details: <SProgDetails2 />,
  },
  {
    title: "Netflix-Clone",
    classN: "li-sites two",
    details: <SProgDetails1 />,
  },
];

export const ArraySProg1 = [
  { title: "Html & CSS" },
  { title: "SASS" },
  { title: "Javascript" },
  { title: "React" },
  { title: "Firebase" },
];
