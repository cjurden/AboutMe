var React = require('react');

var aboutStyle = {
  paddingTop: '10px',
  verticalAlign: 'middle',
  position: 'relative'

};

var About = React.createClass({
  render: function () {
    return (
      <div style={aboutStyle} className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
        <p> <i className="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>
          I am a senior computer science student with a background in dynamic webpage design,
          specifically using cutting edge frameworks like <strong>Angular</strong> and <strong>React</strong>. My greatest strength
          is adaptability, I learn quickly and enjoy challenging myself. I caught the startup bug at TuneIn, where I witnessed agile development at work
          and learned how large-scale tech companies operate. I am excited to take the skills I learned
          there to Cerner, where I am interning in Summer 2016.
        </p>
      </div>
    );
  }
});

module.exports = About;
