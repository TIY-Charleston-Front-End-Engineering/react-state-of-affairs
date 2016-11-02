const ReactDOM = require('react-dom');
const React = require('react');


const HomeView = React.createClass({
   /*  event handler on the component */

   _handleButtonClick: function(){
      console.log("baby shampoooo")
   },

   render: function(){
      return (
         <div className="container">
            <h2 className="">Am I Special????</h2>
            {/* handle event with onClick(«this.«method-name»)*/}
            <button className="btn btn-info" onClick={this._handleButtonClick}> Toggle</button>
         </div>
      )
   }
})




ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
