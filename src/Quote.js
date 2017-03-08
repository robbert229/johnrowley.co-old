import React from 'react';
import './Quote.css';

export default function Quote(props) {
  const { title, quote, author, inverted } = props;

  return (
    <div
      className={`quote ${inverted ? 'quote--inverted' : ''}`}
    >
      <h1
        className={`quote__header ${inverted ? 'quote__header--inverted': '' }`}
      >{title}</h1>
      <blockquote
        className={`blockquote quote__body ${inverted ? 'quote__body--inverted': ''}`}
      >
        <p
          className={`mb-0 quote__body__paragraph ${inverted ? 'quote__body__paragraph--inverted' : ''}`}
        >{quote}</p>

        <footer
          className={`blockquote-footer quote__body__author ${inverted ? 'quote__body__author--inverted' : ''}`}
        >{author}</footer>
      </blockquote>
    </div>
  );
}

Quote.propTypes = {
    title: React.PropTypes.string.isRequired,
    quote: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    inverted: React.PropTypes.bool,
};
