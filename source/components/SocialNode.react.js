var React = require('react');

var SocialNode = React.createClass({
  render: function () {
    return (
      <a className ="social" href={this.props.link}><i className={this.props.logo}></i></a>
    );
  }
});

/*
<div className="col-md-4">
  <a className ="social" href={this.props.link}><i className={this.props.logo}></i></a>
</div>
*/
module.exports = SocialNode;
