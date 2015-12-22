// Reacts
var React = require("react");
var SearchBox = require("./SearchBox")

//var dataSvrUrl = 'http://localhost:51764';
//var cubeSvrUrl = dataSvrUrl + '/api/ValuesController/getCubeQuery';

getState = function(){
  return {


  }
}

// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},


  getInitialState: function () {

    return ({
      username: 'Username',
      password: 'Password',
      newusername: '',
      newpassword: '',
    })
  },

  // storeDidChange: function() {
  //
  //   this.setState(getState());
  // },

  // loadData: function(){
  //
	// 	$.ajax(cubeSvrUrl)
  //         .done(function (result) {
  //          console.log(result);
  //       })
  //       .fail(function (error) {
  //          console.log(error);
  //       })
  //
  // },

  handleUserInput: function(whichProp, val){
    if(whichProp === "username"){
      this.setState({username:val})
    }
  },


  onUserInput: function(event) {
    this.setState({value: event.target.value});
  },

  componentDidMount: function(){

      //this.loadData();
	},

  render: function () {

    return (
        React.createElement("div", null, 
          React.createElement(SearchBox, {id: "username", onUserInput: this.handleUserInput, val: this.state.username}), 
          React.createElement(SearchBox, {id: "password", onUserInput: this.handleUserInput, val: this.state.password})
        )
    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, null), document.getElementById('content'));
});

module.exports = App;
