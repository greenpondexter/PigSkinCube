// Reacts
var React = require("react");
var SearchBox = require("./SearchBox")

//var dataSvrUrl = 'http://localhost:63314/';
//var server = 'http://api.pigskincube.com/'
//var cubeSvrUrl = dataSvrUrl + '/api/ValuesController/getCubeQuery';

getState = function(){
  return {


  }
}

// Component
var Home = React.createClass({
  displayName: "Home",
  propTypes: {},


  getInitialState: function () {

    return ({
      username: '',
      password: '',
      loginname: '',
      loginpassword: '',
      server: 'http://api.pigskincube.com/'
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

  clickHandlerRegister: function(){
    $.ajax({
      type: "POST",
      url: this.state.server+'api/Account/Register/',
      data: JSON.stringify({Email: this.state.username, UserName: this.state.username, Password:this.state.password, ConfirmPassword:this.state.password}),
      contentType: "application/json; charset=utf-8",
				success: function (_d) { alert(JSON.stringify(_d));}
			}).fail(function (_d) { alert(JSON.stringify(_d));});
  },

  clickHandlerGetToken: function(){
    $.ajax({
      type: "POST",
      url: this.state.server+'Token',
      data: 'grant_type=password&username=' + this.state.loginname + '&password=' + this.state.loginpass,
      contentType: "Content-Type: application/x-www-form-urlencoded",
        success:  function (_d) { sessionStorage.setItem('api_token', _d.access_token) }
      }).fail(function (_d) { alert(JSON.stringify(_d));});
  },

  clickHandlerCallAPI: function(){
    $.ajax({
      type: "GET",
      url: this.state.server+'api/Values',
      contentType: "Content-Type: application/x-www-form-urlencoded",
      beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('api_token'));
                },
    success: function (_d) { alert(JSON.stringify(_d));}
        	})
    .fail(function (_d) { alert(JSON.stringify(_d));});
  },



  onUserInput: function(event) {
    this.setState({value: event.target.value});
  },


  componentDidMount: function(){

	},


  render: function () {

    return (
        <div>
          <div className = "row">
            <div className="col-lg-12">
              <div className = "row">
                <div className="col-lg-5"></div>
                  <div className="col-lg-2">
                      <div className = "row buffer"></div>
                        <div className = "row">
                            <div className="col-lg-4">
                              <SearchBox id={"username"} onUserInput = {this.handleUserInput} val={this.state.username} placeholder={"Username"}/>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">

                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                  <div className="col-lg-5"></div>
              </div>
            </div>


    );
  }
});

$(window).load(function(){
  React.render(<Home/>, document.getElementById('contentHome'));
});

module.exports = Home;
