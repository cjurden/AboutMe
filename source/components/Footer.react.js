var React = require('react');
var SocialNode = require('./SocialNode.react');

var footStyle = {
   position:'absolute',
   bottom:'0',
   width:'100%',
   height:'60px',   /* Height of the footer */
   background:'none'
};

var nodeStyle = {
  //make this so that the logos are centered
};

var Footer = React.createClass({
  render: function () {
    return (
      <footer style={footStyle}>
        <div className="container tc">
          <div className="col-md-4">
            <a className ="social" href="https://github.com/cjurden"><div className="fa fa-2x fa-github-square"></div></a>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
