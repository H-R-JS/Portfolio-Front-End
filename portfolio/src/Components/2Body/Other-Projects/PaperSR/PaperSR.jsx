import React from "react";

export class PaperSR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      papSciRock: ["Paper", "Scissors", "Rock"],
      elementRender: "",
    };
    this.randomAction = this.randomAction.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

  randomAction(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  async renderAction() {
    const numAction = this.randomAction(this.state.papSciRock.length);
    this.setState({ elementRender: this.state.papSciRock[numAction] });
    console.log(this.state.elementRender);
  }

  render() {
    return (
      <main>
        <button className="btn-action" onClick={this.renderAction}>
          Action
        </button>
      </main>
    );
  }
}
