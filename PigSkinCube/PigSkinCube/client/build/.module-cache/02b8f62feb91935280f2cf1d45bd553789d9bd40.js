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
    this.state[whichProp] = event.target.value
    this.setState(this.state);

  },

  clickHandler: function(){
    $.ajax({
      type: "POST",
      url: 'http://localhost:63314/api/Account/Register/',
      data: JSON.stringify({UserName: 'cwork845', Password:'Delong', ConfirmPassword:'Delong'}),
      contentType: "application/json; charset=utf-8",
				success: function (_d) { alert(JSON.stringify(_d));}
			}).fail(function (_d) { alert(JSON.stringify(_d));});
  },

  onUserInput: function(event) {
    this.setState({value: event.target.value});
  },


  beforeSend: function (xhr) {
  xhr.setRequestHeader("Authorization", 'Bearer ' + _access_token);
  },

  componentDidMount: function(){

	},


  render: function () {

    return (
        React.createElement("div", null, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-12"}, 
              React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-lg-5"}), 
                  React.createElement("div", {className: "col-lg-2"}, 
                      React.createElement("div", {className: "row buffer"}), 
                      React.createElement("div", {className: "row"}, 
                        React.createElement(SearchBox, {id: "username", onUserInput: this.handleUserInput, val: this.state.username}), 
                        React.createElement(SearchBox, {id: "password", onUserInput: this.handleUserInput, val: this.state.password}), 
                        React.createElement("div", null, 
                          React.createElement("button", {type: "button", className: "btn btn-w-m btn-success", onClick: this.clickHandler}, "Register User")
                        )
                      )
                   ), 
                  React.createElement("div", {className: "col-lg-5"})
              )
            )
          )
        )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, null), document.getElementById('content'));
});

module.exports = App;
