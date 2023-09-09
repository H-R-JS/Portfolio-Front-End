import React from "react";

export class PaperSR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      papSciRock: [
        require("./ImgPaperSR/scissors.png"),
        require("./ImgPaperSR/rock.png"),
        require("./ImgPaperSR/paper.png"),
      ],
      elementRender: require("./ImgPaperSR/point.png"),
      elementAction: "",
      actionPlayer: "",
      judgeText: "",
      infoText: "",
    };

    this.randomAction = this.randomAction.bind(this);
    this.setStateSynchrone = this.setStateSynchrone.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.playerAction = this.playerAction.bind(this);
    this.judgement = this.judgement.bind(this);
  }
  // set function for paperSR
  setStateSynchrone(stateUpdate) {
    return new Promise((resolve) => {
      this.setState(stateUpdate, () => resolve());
    });
  }

  randomAction(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  // function paperSR
  async renderAction() {
    if (!this.state.actionPlayer == "") {
      const numAction = this.randomAction(this.state.papSciRock.length);
      await this.setStateSynchrone({
        elementRender: this.state.papSciRock[numAction],
        elementAction: `${numAction}`,
        infoText: "",
      });
      console.log(this.state.elementAction);
      this.judgement(this.state.actionPlayer, this.state.elementAction);
      await this.setStateSynchrone({
        actionPlayer: "",
      });
    } else {
      await this.setStateSynchrone({
        infoText: "Choississez une action",
      });
    }
  }

  async playerAction(e) {
    const numPlayer = e.target.getAttribute("data-index");
    await this.setStateSynchrone({
      actionPlayer: `${numPlayer}`,
    });
    //console.log();
  }

  async judgement(statePlayer, stateElement) {
    if (statePlayer === "0") {
      if (statePlayer === stateElement) {
        await this.setStateSynchrone({
          judgeText: "EQUAL",
        });
      } else if (stateElement === "2") {
        await this.setStateSynchrone({
          judgeText: "WIN",
        });
      } else if (stateElement === "1") {
        await this.setStateSynchrone({
          judgeText: "LOSE",
        });
      }
    } else if (statePlayer === "1") {
      if (statePlayer === stateElement) {
        await this.setStateSynchrone({
          judgeText: "EQUAL",
        });
      } else if (stateElement === "0") {
        await this.setStateSynchrone({
          judgeText: "WIN",
        });
      } else if (stateElement === "2") {
        await this.setStateSynchrone({
          judgeText: "LOSE",
        });
      }
    } else if (statePlayer === "2") {
      if (statePlayer === stateElement) {
        await this.setStateSynchrone({
          judgeText: "EQUAL",
        });
      } else if (stateElement === "1") {
        await this.setStateSynchrone({
          judgeText: "WIN",
        });
      } else if (stateElement === "0") {
        await this.setStateSynchrone({
          judgeText: "LOSE",
        });
      }
    }
  }

  render() {
    return (
      <main className="section-paperSR">
        <article className="container-choices">
          <img
            onClick={this.playerAction}
            className="hand s"
            data-index="0"
            src={require("./ImgPaperSR/hand-s.png")}
          />
          <img
            onClick={this.playerAction}
            className="hand r"
            data-index="1"
            src={require("./ImgPaperSR/hand-r.png")}
          />
          <img
            onClick={this.playerAction}
            className="hand p"
            data-index="2"
            src={require("./ImgPaperSR/hand-p.png")}
          />
        </article>
        <button className="btn-action" onClick={this.renderAction}>
          Action
        </button>
        <img src={this.state.elementRender} className="render-action" />
        <span className="judge-text">{this.state.judgeText}</span>
        <span className="info-text">{this.state.infoText}</span>
      </main>
    );
  }
}
