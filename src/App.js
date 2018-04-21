import React, { Component } from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="personal">
          <div className="personal_icons">
            <a
              className="icon_ctn"
              href="mailto:rblin081@gmail.com?Subject=Hello%20Old%20Friend"
            >
              <i className="fas fa-envelope fa-5x" />
            </a>
            <a
              className="icon_ctn"
              target="_blank"
              href="https://github.com/rblin081"
            >
              <i className="fab fa-github fa-5x" />
            </a>
            <div className="icon_ctn">
              <i className="fas fa-phone fa-5x" />
            </div>
          </div>
          <div>
            <div className="headshot">
              <div className="img"></div>
            </div>
            <div className="title">
              <span>Robert Blinsinger</span>
              <span>Software Engineer</span>
            </div>
            <div className="resume_link_ctn">
              <a
                className="resume_link"
                target="_blank"
                href="https://drive.google.com/file/d/1dz1eveoxeUZOUvIBRVdbFl6nFY7rwrNc/view?usp=sharing"
              >
                <i className="fa fa-play button-icon-left"/>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </section>
        <AboutMe/>
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
