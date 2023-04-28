import React from "react";
import { SkillsArray } from "./SkillsArray";
import { Tools } from "../Tools/Tools";
import { RevealFadeTop } from "../../../Motion/Fade";

export class Skills extends React.Component {
  render() {
    return (
      <section className="skills-tools" id="skills">
        <RevealFadeTop>
          <div className="skill-section">
            <h2>Compétences</h2>
            <div>
              {SkillsArray.map((item, index) => {
                return (
                  <div key={index} className="skill-box">
                    <span className="span-title">{item.title}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-per"
                        style={{ width: `${item.per}` }}
                      >
                        ABEDFABEDGGGOODD
                      </div>
                    </div>
                    <span className="percentage">{item.per}</span>
                  </div>
                );
              })}
              <div className="skill-img"></div>
            </div>
          </div>
          <Tools />
        </RevealFadeTop>
      </section>
    );
  }
}
