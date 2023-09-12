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
      playerRender: "?",

      elementAction: "",
      actionPlayer: "",

      classRenderEl: "",

      judgeText: "",
      infoText: "",

      scoreElement: 0,
      scorePlayer: 0,
    };
    this.handRefS = React.createRef();
    this.handRefR = React.createRef();
    this.handRefP = React.createRef();

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
        classRenderEl: " none",
      });
      setTimeout(() => {
        this.setStateSynchrone({
          classRenderEl: "",
          elementRender: this.state.papSciRock[numAction],
          elementAction: `${numAction}`,
          infoText: "",
        });
        console.log(this.state.elementAction);
      }, 800);
      setTimeout(() => {
        this.judgement(this.state.actionPlayer, this.state.elementAction);
        this.setStateSynchrone({
          actionPlayer: "",
          playerRender: `?`,
        });
      }, 1200);
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
    if (numPlayer == 0) {
      await this.setStateSynchrone({
        playerRender: `SCISSORS`,
      });
    } else if (numPlayer == 1) {
      await this.setStateSynchrone({
        playerRender: `ROCK`,
      });
    } else {
      await this.setStateSynchrone({
        playerRender: `PAPER`,
      });
    }
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
          scorePlayer: this.state.scorePlayer + 1,
        });
      } else if (stateElement === "1") {
        await this.setStateSynchrone({
          judgeText: "LOSE",
          scoreElement: this.state.scoreElement + 1,
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
          scorePlayer: this.state.scorePlayer + 1,
        });
      } else if (stateElement === "2") {
        await this.setStateSynchrone({
          judgeText: "LOSE",
          scoreElement: this.state.scoreElement + 1,
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
          scorePlayer: this.state.scorePlayer + 1,
        });
      } else if (stateElement === "0") {
        await this.setStateSynchrone({
          judgeText: "LOSE",
          scoreElement: this.state.scoreElement + 1,
        });
      }
    }
  }

  /*componentDidMount(){
document.addEventListener('mousedown', )
  }
  componentWillUnmount(){

  }*/

  render() {
    return (
      <main className="section-paperSR">
        <article className="container-choices">
          <img
            ref={this.handRefS}
            onClick={this.playerAction}
            className="hand s"
            data-index="0"
            src={require("./ImgPaperSR/hand-s.png")}
          />
          <img
            ref={this.handRefR}
            onClick={this.playerAction}
            className="hand r"
            data-index="1"
            src={require("./ImgPaperSR/hand-r.png")}
          />
          <img
            ref={this.handRefP}
            onClick={this.playerAction}
            className="hand p"
            data-index="2"
            src={require("./ImgPaperSR/hand-p.png")}
          />
        </article>

        <span className="render-action-player">{this.state.playerRender}</span>
        <button className="btn-action" onClick={this.renderAction}>
          Action
        </button>
        <img
          src={this.state.elementRender}
          className={"render-action" + this.state.classRenderEl}
        />
        <span className="info-text">{this.state.infoText}</span>
        <span className={"judge-text" + this.state.classRenderEl}>
          {this.state.judgeText}
        </span>

        <aside className="container-score">
          <span className="score player">{this.state.scorePlayer}</span>
          <span className="score"> | </span>
          <span className="score element">{this.state.scoreElement}</span>
        </aside>
      </main>
    );
  }
}
