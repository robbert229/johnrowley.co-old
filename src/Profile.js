import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import photo from './photo.jpg';

import './Profile.css';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    (this:any).toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="faded" light toggleable fixed={this.props.fixed ? "top" : ""} className={this.props.className}>
        <NavbarToggler right onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experiences">Experiences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#abilities">Abilities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contect</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
MyNavbar.propTypes = {
  fixed: React.PropTypes.bool,
  className: React.PropTypes.string,
}

export default function Profile(props) {
  const body = `I am a allround developer capable of building everything from
  single page web applications to infrastructure. I am a junior programmer with
  good knowledge of front-end, and devops techniques. I love working on applications
  that allow me to work with both front-end and backend technologies. I love spending
  time and effort to make managing and operating a system easier, and more scaleable.
  Also I like working with others. I have more of an opportunity to learn from others
  and to impart the lessons I have learned through working with others.`

  return (
    <div className="profile" id="profile">
      <MyNavbar fixed={props.fixed} className="profile__navbar"/>

      <div className="container">
        <div className={`profile__container container-fluid ${props.fixed ? 'profile__container--spaced' : '' }`}>

          <div className="profile__container__introduction">
            <h1 className="profile__container__introduction__header">Profile</h1>
            <p className="profile__container__introduction__subheader">I am a web developer &#47; devops 	&#47; husband</p>
          </div>

          <hr className="profile__container__seperator"/>

          <div className="row">
            <div className="profile__container__about col-lg-4">
              <h2 className="profile__container__about__header">About me</h2>
              <p className="profile__container__about__body">
                {body}
              </p>
            </div>

            <div className="col-lg-4">
              <img src={photo} className="profile__container__photograph"/>
            </div>

            <div className="profile__container__details col-lg-4">
              <h2 className="profile__container__details__header">Details</h2>
              <dl className="row profile__container__details__table">
                <dt className="col-sm-3">Name</dt>
                <dd className="col-sm-9">John Rowley</dd>

                <dt className="col-sm-3">Age</dt>
                <dd className="col-sm-9">20</dd>

                <dt className="col-sm-3">Location</dt>
                <dd className="col-sm-9">Pullman, Washington, USA</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  fixed: React.PropTypes.bool,
};
