var React = require('react');
var FB = require('fb');

var Footer = React.createClass({
  render: function () {
    return (
      <footer>
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
