import React from 'react';
import Quote from './Quote';

import './Experiences.css';

const education = [
  {
    title: 'North West Christian Homeschool Coop',
    subtitle: 'Elementary, Middleschool, Highschool',
    timeframe: 'Sept 2001 - Jun 2012',
    description: `I was homeschooled from my elementray school days, all the way
    until colledge. Homeschooling is widely considered an easy alternative to
    public school, but for some, it can actually be a more intense, and
    rigourous education. My experiences where the latter. In my free time between
    studies I found that I enjoyed projects that allowed me to use technology. My
    Karate Sensei at the time began to teach me how to program using ASP, HTML,
    and CSS.`,
  },
  {
    title: 'Eastern Washington University',
    subtitle: 'Bachelor of Science in Computer Science',
    timeframe: 'Sept 2012 - Dec 2016',
    description: `I enrolled at EWU through Running Start (a program that allow
    highschool students to enroll in colledge and count toward highschool
    graduation. ) while I was 16. Eastern taught me about Datastructures, and
    Algorithms, and CS Theory. It also exposed me to peers who were interested
    in functional programming languages such as Haskell, Lisp, and Scala.`,
  }
];

const career = [
  {
    title: 'Schweitzer Engineering Labs',
    subtitle: ' Fulltime - Associate Software Engineer',
    timeframe: 'Nov 2016 - Present',
    description: `At Schweitzer I work on building Single Page Apps using React,
    Golang, and the Graph Database Neo4j.`,
  },
  {
    title: 'PAML',
    subtitle: 'Parttime - Software Integration Intern',
    timeframe: 'Aug 2016 - Oct 2016',
    description: `At PAML I worked on building infrastructure. One of the projects
    that I worked on read in messages from a variety of different systems, and then
    checked those messsages against a rule set, the system could then alert different
    groups based on a set of rules, what machine sent the message, what time it is,
    etc. The entire application had a web interface to it as well.`,
  },
  {
    title: 'Etailz',
    subtitle: 'Fulltime - Intern',
    timeframe: 'Jun 2014 - Sep 2014',
    description: `I worked on building coy beauty, a makeup / fashion product
    webstore. I worked with html, css, javascript, php, and magento to build
    it.`,
  },
  {
    title: 'Crystal Fontz',
    subtitle: 'Fulltime - Intern',
    timeframe: 'Jun 2013 - Sep 2013',
    description: `I worked primarily on our linux som modules. I created high
    level libraries, and documentation for the low level interfaces. I worked in
    c, and c++. I additionally worked on building a Linux based 3D Printing
    platform, which involved doing extremely low level work involving a FIQ (
    fast interrupt queue) moving memory around outisde of linux.`,
  },
];

function ExperienceTable(props) {
  const { className, data } = props;

  return (
    <table className={`${className} experience-table`}>
      {data.map(({title, subtitle, timeframe, description}) => (
        <tbody key={title} className="experience-table__table">
          <tr className="experience-table__table__headers">
            <td className="experience-table__table__headers__title">{title}</td>
            <td className="experience-table__table__headers__subtitle">{subtitle}</td>
          </tr>
          <tr className="experience-table__table__body">
            <td className="experience-table__table__body__timeframe">{timeframe}</td>
            <td className="experience-table__table__body__description">{description}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

ExperienceTable.propTypes = {
  className: React.PropTypes.string,
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      subtitle: React.PropTypes.string.isRequired,
      timeframe: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    }),
  ),
};

export default function Experiences(props) {
  return (
    <div className="experiences" id="experiences">
      <div className="container">

        <Quote
          title="Experiences"
          quote={`“There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices, and heuristics that a craftsman knows, and you must also grind that knowledge into your fingers, eyes, and gut by working hard and practicing.`}
          author="Robert C. Martin, Clean Code: A Handbook of Agile Software CraftsmanshipRobert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"
        />

        <hr className="experiences__seperator"/>

        <h2 className="experiences__subtitle">Education</h2>
        <ExperienceTable className="experiences__education" data={education} />

        <h2 className="experiences__subtitle">Career</h2>
        <ExperienceTable className="experiences__career" data={career} />

      </div>
    </div>
  );
}
