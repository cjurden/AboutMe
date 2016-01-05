var React = require('react');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var Social = require('./Social.react');
var About = require('./About.react');
var Skills = require('./Skills.react');


//var FB = require('fb');
//var Social = require('./Social.react');

//without flux
/*
var Application = React.createClass({
  render: function () {
    return (
      <div className="app">
        <Header />
        <Social fb={this.props.fb}/>
        <Footer />
      </div>
    );
  }
});
*/
//below is with flux architecture. going to attempt to debug without flux.

var Application = React.createClass({
  render: function () {
    return (
      <div className="app">
        <Header />
        <hr />
        <Social />
        <div className="row">
        <About />
        </div>
        <Skills />
        <Footer />
      </div>
    );
  }
});

module.exports = Application;
//
//style={{textAlign: center}}
