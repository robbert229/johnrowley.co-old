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
  },
  {
    title: 'Linux',
    value: 5,
  },
  {
    title: 'C',
    value: 4,
  },
  {
    title: 'NoSQL',
    value: 4,
  },
  {
    title: 'ASP.NET',
    value: 5,
  },
  {
    title: 'Network Security',
    value: 3,
  },
  {
    title: 'Go',
    value: 5,
  },
  {
    title: 'Embedded Linux',
    value: 3,
  },
  {
    title: 'Python',
    value: 2,
  },
  {
    title: 'C#',
    value: 4,
  },
  {
    title: 'Git',
    value: 4,
  },
  {
    title: 'MongoDB',
    value: 3,
  },
  {
    title: 'Neo4j',
    value: 4,
  },
  {
    title: 'Ruby',
    value: 2,
  },
  {
    title: 'Web Applications',
    value: 5
  },
  {
    title: 'React',
    value: 5,
  },
  {
    title: 'Flow',
    value: 4,
  },
  {
    title: 'MySQL',
    value: 3,
  },
  {
    title: 'Test Driven Development',
    value: 4,
  },
  {
    title: 'VIM',
    value: 3,
  },
].sort((a,b) => a.title.localeCompare(b.title));


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
                <tr className="abilities__container__skills__skill" key={title}>
                  <td className="abilities__container__skills__skill__name">{title}</td>
                  <td className="abilities__container__skills__skill__value">
                    {new Array(value)
                      .fill()
                      .map((v,i) => (
                        <i className="fa fa-star" aria-hidden="true" key={i}></i>
                      ))}
                    {new Array(5 - value)
                      .fill()
                      .map((v,i) => (
                        <i className="fa fa-star-o" aria-hidden="true" key={value + i}></i>
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
