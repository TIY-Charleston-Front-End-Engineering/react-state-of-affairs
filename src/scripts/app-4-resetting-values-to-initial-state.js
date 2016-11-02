const ReactDOM = require('react-dom');
const React = require('react');


const HomeView = React.createClass({
   getInitialState: function(){
      //**allows us to store the original value ON the component**
      this.startingStateObj = {
         previewImgUrl: 'http://www.allensguide.com/img/no_image_selected.gif'
      }

      return this.startingStateObj
   },

   _handleImgPreviewClick: function(){
      console.log('button CLICKED!!!!!')
      console.log('img input val', this.refs.imgInputEl.value)
      let currentImgInput = this.refs.imgInputEl.value
      let newStateObj = {}

      if( currentImgInput.length  > 0   ) {
         newStateObj = { previewImgUrl: currentImgInput }
      } else {

         // and here we re-set the original value that we had set as initial state for the component
         //   (only possible because of how we put the object on the component in getInitialState)
         newStateObj = this.startingStateObj
      }
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
                     <button className="btn btn-block btn-default btn-warning btn-sm" onClick={this._handleImgPreviewClick} >Add Image</button>

                     <br/>

                     <div href="#" className="thumbnail">
                           <img src={this.state.previewImgUrl} alt="no image found"/>
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
