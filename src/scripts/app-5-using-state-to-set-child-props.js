const ReactDOM = require('react-dom');
const React = require('react');


const HomeView = React.createClass({
   getInitialState: function(){
      this.startingStateObj = {
         previewImgUrl: 'http://www.allensguide.com/img/no_image_selected.gif',
         // (4) setting default values for the shoutOutData that will be sent as initial props
         //     to <ShoutOut shoutData={...}/>
         shoutOutData : {
            msg: "HELLOOO HOW ARE YOU????",
            imgLink: "https://debragettlemanrak.files.wordpress.com/2011/04/angrykid.jpg",
            from: "Billy"
         }
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
         newStateObj = this.startingStateObj
      }
      this.setState(newStateObj)
   },

   //
   _handleNewSubmit: function(){
      let theMsg = this.refs.theMsgEl.value
      let msgFrom = this.refs.msgFromEl.value
      let theImg = this.refs.imgInputEl.value

      let newStateObj = {
         shoutOutData: {
            msg: theMsg,
            imgLink: theImg,
            from: msgFrom
         }
      }

      //triggers the `.render()` method with new state value
      this.setState(newStateObj)
   },

   render: function(){

      return (
         <div className="container">
            <h1>Shout Outs</h1>
            <div className="row">
               <div className="col-sm-4 new-shoutout">
                     <h3>Your Message</h3>
                     <input type="text" className="form-control"  ref="theMsgEl"/>

                     <hr/>

                     <h4>Message From </h4>
                     <input type="text" className="form-control" ref="msgFromEl"/>

                     <hr/>

                     <h4>Add Image</h4>

                     <input type="text" className="form-control" ref="imgInputEl"/>
                     <button className="btn btn-block btn-default btn-warning btn-sm" onClick={this._handleImgPreviewClick} >Add Image</button>

                     <br/>

                     <div href="#" className="thumbnail">
                           <img src={this.state.previewImgUrl} alt="no image found"/>
                     </div>
                     <br/>
                     <button className="btn btn-block btn-success btn-lg" onClick={this._handleNewSubmit}>+</button>
               </div>
               {/* (3)passing down STATE as PROPS to the child ShoutOut component*/}
               <ShoutOut shoutData={ this.state.shoutOutData }/>

            </div>

         </div>
      )
   }
})

// (1)new component

const ShoutOut = React.createClass({
   render: function(){
      return (
         <div className="col-sm-8">
            <div className="shoutout">

               <blockquote style={{background: 'indianred', color: '#fff', padding: '4rem'}}>
               {/* (2) component expecting to receive data through prop -- on `shoutData`*/}

                  <p>{this.props.shoutData.msg}</p>
                  <img src={this.props.shoutData.imgLink} alt="..."/>

                  <cite>{this.props.shoutData.from}</cite>
               </blockquote>
            </div>
         </div>

      )
   }
})

//


ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
