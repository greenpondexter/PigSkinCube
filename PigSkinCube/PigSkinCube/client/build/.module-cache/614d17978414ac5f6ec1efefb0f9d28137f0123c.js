// Reacts
var React = require("react");


//SearchBox
var SearchBox = React.createClass({
  displayName: "Home",
  propTypes: {},


  componentDidMount: function(){
	},

  handleChange: function(text){
    this.props.onUserInput(this.props.id, text)
  },

  render: function () {

    return (
        React.createElement("div", null, 
          React.createElement("input", {type: "text", 
                  value: this.props.val, 
                  onChange: (text) => this.handleChange(event.target.value)})
        )

    );
  }
});

module.exports = SearchBox;
