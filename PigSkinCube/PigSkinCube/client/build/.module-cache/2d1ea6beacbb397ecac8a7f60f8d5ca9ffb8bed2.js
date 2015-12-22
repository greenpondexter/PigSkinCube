// Reacts
var React = require("react");


//SearchBox
var SearchBox = React.createClass({
  displayName: "Home",
  propTypes: {},


  componentDidMount: function(){
	},



  render: function () {

    return (
        React.createElement("div", null, 
          React.createElement("input", {type: "text", value: this.props.val, onChange: this.props.inputCallback})
        )

    );
  }
});

module.exports = SearchBox;
