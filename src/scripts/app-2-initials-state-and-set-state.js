const ReactDOM = require('react-dom');
const React = require('react');


const HomeView = React.createClass({
   /* (1) sets initial state for the component,
          impacts what gets rendered
    */

   getInitialState: function(){
      let startingStateObj = {
         isSomethingGreat: false
      }

      return startingStateObj //note: this MUST be an object
   },


   _handleButtonClick: function(){
      let newStateObj = {}
      if(this.state.isSomethingGreat === true){
         newStateObj = { isSomethingGreat: false }
      } else {
         newStateObj = { isSomethingGreat: true }
      }
      /* (3) .setState(«obj») will trigger the .render() to rerender the page */
      this.setState(newStateObj)
      // NEVER DO THIS: this.state.isSomethingGreat = newStateObj
   },

   render: function(){
      let h2Class = ''
      /* (2) Check the value on state -- this will impact what gets rendered below */
      if (this.state.isSomethingGreat === true){
         h2Class = 'bg-primary'
      }

      return (
         <div className="container">
            <h2 className={h2Class}>Am I Special????</h2>
            <button className="btn btn-info" onClick={this._handleButtonClick}> Toggle</button>
         </div>
      )
   }
})




ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
