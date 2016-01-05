var React = require('react');

//var angURL = require('./img/angular.png');
//var haskell = require('./Images/haskell.png');

var Skills = React.createClass({
  render: function () {
    return (
      <div className="container" style={{marginBottom: '60px'}}>
        <div className="row" style={{textAlign: 'center', position: 'relative'}}>
          <img className="skills" src="https://camo.githubusercontent.com/a414ed53a23a0d004d0ddd1981094f02b406b181/687474703a2f2f6a61766173637269707469736d616769632e6769746875622e696f2f6175692f6c6f676f732f72656163742e706e67"></img>
          <img className="skills" src="https://lh3.googleusercontent.com/GYSBZh5RpCFwTU6db0JlHfOr_f-RWvSQwP505d0ZjWfqoovT3SYxIUPOCbUZNhLeN9EDRK3b2g=s128-h128-e365"></img>
          <img className="skills" src="https://mdn.mozillademos.org/files/3563/HTML5_Logo_128.png"></img>
          <img className="skills" src="http://iconshow.me/media/images/logo/brand-logo-icon/png/128/css3-128.png"></img>
          <img className="skills" src="http://codeschoolbulacan.com/images/jquery.png"></img>
          <img className="skills" src="http://webica.org/images/slider/bootstrap.png"></img>
        </div>
      </div>
    );
  }
});

module.exports = Skills;

/*

<img src={angURL}></img>
<img src={haskellURL}></img>
<img src={require("/img/html5.png")}></img>
<img src={require("/img/java.png")}></img>
<img src={require("/img/python.png")}></img>
<img src={require("/img/reactjs.png")}></img>
*/
