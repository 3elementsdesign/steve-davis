import React from "react";

import "./VennDiagram.scss";

class VennDiagram extends React.Component {
  state = {
    visible: true
  };
  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={this.state.visible ? "c-venn" : "c-venn c-venn--hidden"}
        >
          <div className="c-venn__circle c-venn__circle--ux-designer">
            <span className="c-venn__name">UX Designer</span>
          </div>
          <div className="c-venn__circle c-venn__circle--ux-engineer">
            <span className="c-venn__name">UX Engineer</span>
          </div>
          <div className="c-venn__circle c-venn__circle--js-engineer">
            <span className="c-venn__name">Javascript Engineer</span>
          </div>
        </div>

        <button className="c-toggle-venn" onClick={this.handleClick}>
          Toggle
        </button>
      </React.Fragment>
    );
  }
}

export default VennDiagram;
