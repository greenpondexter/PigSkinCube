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
        <div>
          <input type="text"
                  value={this.props.val}
                  placeholder={this.props.placeholder}
                  onChange={(text) => this.handleChange(event.target.value)}/>
        </div>

    );
  }
});

module.exports = SearchBox;
