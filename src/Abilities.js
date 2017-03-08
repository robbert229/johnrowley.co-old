import React from 'react';
import Quote from './Quote';

import './Abilities.css';

const abilities = [
  {
    title: 'CSS',
    value: 4,
  },
  {
    title: 'Javascript',
    value: 5,
  }
];


export default function Abilities(props) {
  return (
    <div className="abilities" id="abilities">
      <div className="container">
        <Quote
          title="Abilities"
          quote={`Only those who have patience to do simple things perfectly ever acquire the skill to do difficult things easily.`}
          author="James J. Corbett"
          inverted
        />

        <hr />

        <div className="abilities__container">
          <h2 className="abilities__container__subtitle">Skills</h2>
          <table className="abilities__container__skills">
            <tbody>
              {abilities.map(({title, value}) => (
                <tr className="abilities__container__skills__skill">
                  <td className="abilities__container__skills__skill__name">{title}</td>
                  <td className="abilities__container__skills__skill__value">
                    {new Array(value)
                      .fill()
                      .map(v => (
                        <i className="fa fa-star" aria-hidden="true"></i>
                      ))}
                    {new Array(5 - value)
                      .fill()
                      .map(v => (
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
