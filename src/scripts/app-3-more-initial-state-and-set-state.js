const ReactDOM = require('react-dom');
const React = require('react');


const HomeView = React.createClass({
   /* (1) sets initial state for the component,
          impacts what gets rendered
    */
   getInitialState: function(){
      let startingStateObj = {
         previewImgUrl: 'http://www.allensguide.com/img/no_image_selected.gif'
      }

      return startingStateObj
   },

   _handleImgPreviewClick: function(){
      console.log('button CLICKED!!!!!')
      console.log('img input val', this.refs.imgInputEl.value)

      let newStateObj = {
         previewImgUrl: this.refs.imgInputEl.value
      }

      /* (4) .setState(obj)-- this will execute .render() with new state  */

      this.setState(newStateObj)
   },

   render: function(){
      return (
         <div className="container">
            <h1>Shout Outs</h1>
            <div className="row">
                  <div className="col-sm-4 new-shoutout">
                     <h3>Your Message</h3>
                     <input type="text" className="form-control"/>

                     <hr/>

                     <h4>Add Image</h4>

                     <input type="text" className="form-control" ref="imgInputEl"/>
                     /* (3) the <button>'s event-listener + `.onClick` event-handler  */
                     <button className="btn btn-block btn-default btn-warning btn-sm" onClick={this._handleImgPreviewClick} >Add Image</button>

                     <br/>

                     <div href="#" className="thumbnail">
                       {/* (2) Check the value on state -- this will impact what gets rendered  */}

                        <img src={this.state.previewImgUrl} alt="..."/>
                     </div>
                     <br/>
                     <button className="btn btn-block btn-success btn-lg">s</button>

               </div>

            </div>

         </div>
      )
   }
})



ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
