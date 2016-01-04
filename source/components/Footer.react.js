var React = require('react');
var SocialNode = require('./SocialNode.react');

var footStyle = {
   position:'fixed',
   bottom:'0',
   width:'100%',
   height:'60px',   /* Height of the footer */
   background:'#FFFFFF'
};

var Footer = React.createClass({
  render: function () {
    return (
      <footer style={footStyle}>
        <div className="container-fluid">
          <div className="text-center center-block">
            <SocialNode logo="fa fa-3x fa-github-square social" link="https://github.com/cjurden" />
            <SocialNode logo="fa fa-3x fa-linkedin-square social" link="https://www.linkedin.com/in/cole-jurden-19801534" />
            <SocialNode logo="fa fa-3x fa-facebook-square social" link="https://www.facebook.com/nickjergens11" />
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;


/*
style={footStyle}
<SocialNode logo="fa fa-2x fa-github-square" link="https://github.com/cjurden" />
<SocialNode logo="fa fa-2x fa-linkedin-square" link="https://www.linkedin.com/in/cole-jurden-19801534" />
<SocialNode logo="fa fa-2x fa-facebook-square" link="https://www.facebook.com/nickjergens11" />
*/
