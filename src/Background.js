import React from 'react';
import 'vunit.js/src/vunit.js';

import './Background.css';

new window.vUnit({
  CSSMap: {
    // The selector (VUnit will create rules ranging from .selector1 to .selector100)
    '.vh': {
        // The CSS property (any CSS property that accepts px as units)
        property: 'height',
        // What to base the value on (vh, vw, vmin or vmax)
        reference: 'vh'
    },
  },
  onResize: function() {
    console.log('A screen resize just happened, yo.');
  }
}).init(); // call the public init() method

export default function Background(props) {
  return (
    <div className="jumbotron jumbotron-fluid background vh100">
      <div className="container background__title">
        <h1 className="background__title__header">John Rowley</h1>
        <p className="lead background__title__subheader">Interactive resume</p>
      </div>
      <a href="#profile" className="scroll-down background__footer">
        <i className="fa fa-chevron-down fa-2x background__footer__icon" aria-hidden="true"></i>
			</a>
    </div>
  );
}
