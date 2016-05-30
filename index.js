
var React = require('react')
var ReactDom = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route
var hashHistory = require('react-router').history
var Link = require('react-router').Link
var Home = require('./components/Home.react')

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    {/* add the routes here */}
  </Router>
), document.getElementById('guokrspace'))