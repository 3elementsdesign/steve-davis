import React from "react";

import "./VennDiagram.scss";

const VennDiagram = props => (
  <div className="c-venn">
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
);

export default VennDiagram;
