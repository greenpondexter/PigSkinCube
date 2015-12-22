// Reacts
var React = require("react");

var dataSvrUrl = 'http://localhost:51764';
var cubeSvrUrl = dataSvrUrl + '/api/ValuesController/getCubeQuery';

getState = function(){
  return {

    
  }
}

// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},


  getInitialState: function () {

    return getState();
  },

  storeDidChange: function() {

    this.setState(getState());
  },

  loadData: function(){

		$.ajax(cubeSvrUrl)
          .done(function (result) {                       
           console.log(result);
        })
        .fail(function (error) {
           console.log(error);
        })

  },


  componentDidMount: function(){
      
      this.loadData();
	},

  render: function () {


    var Element;
      
          Element = "Hello" 
     

    return (
        React.createElement("div", null, 
          Element
        )
          
    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, null), document.getElementById('content'));
});

module.exports = App;
