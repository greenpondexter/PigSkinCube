// Reacts
var React = require("react");

var dataSvrUrl = 'http://localhost:41977';

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

  },


  componentDidMount: function(){
      DataStore.initializeFocusedData();
      this.forceUpdate();
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
