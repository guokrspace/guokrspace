var React = require('react');
var Header = require('./Header.react')
var Home = React.createClass({
	/**
   * @return {object}
   */
  render: function() /*object*/ {
  	return (
  		<div className="pusher">
  		<Header></Header>
  		</div>
  	);
  }
});


module.exports = Home;