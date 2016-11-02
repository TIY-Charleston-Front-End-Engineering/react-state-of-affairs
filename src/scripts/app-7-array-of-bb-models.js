const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

let ShoutOutModel = Backbone.Model.extend({})

const HomeView = React.createClass({


   getInitialState: function(){
   //(1) PROVIDE THE DUMMY DATA FOR THE INITIAL .render()

      //(1a) create new instances of models
      let defaultMod = new ShoutOutModel()
      let mod2 = new ShoutOutModel()

      let modAttributes = {
         msg: "HELLOOO HOW ARE YOU????",
         imgLink: "https://debragettlemanrak.files.wordpress.com/2011/04/angrykid.jpg",
         from: "Billy"
      }

      let modAtributes2 = {
         msg: "React seemed great but now it is making me so sad",
         from: 'TIY CHS Sep-2016',
         imgLink: "http://2.bp.blogspot.com/-Iaqmr6Y72fg/UhacXxZIKFI/AAAAAAAAAsA/P3CpMxA7_LM/s1600/sad-banana-2.jpg"
      }

      //(1b) Set the models' attributes property
      defaultMod.set(modAttributes)
      mod2.set(modAtributes2)

      //(1c) Push the bb models to an empty array
      let modelsListArray = []
      modelsListArray.push(defaultMod)
      modelsListArray.push(mod2)

      let startingStateObj = {
         previewImgUrl: 'http://www.allensguide.com/img/no_image_selected.gif',
         //(1d) Put array of modles on the component's state
         shoutOutData : modelsListArray
      }

      return startingStateObj
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
   _addSubmission: function(evt){
      let theMsg = this.refs.theMsgEl.value
      let msgFrom = this.refs.msgFromEl.value
      let theImg = this.refs.imgInputEl.value

      let modAttributes = {
         msg: theMsg,
         imgLink: theImg,
         from: msgFrom
      }

      let newMod = new ShoutOutModel()
      newMod.set(modAttributes)

      let copyOfShoutList = this.state.shoutOutData.map(function(m){return m })
      copyOfShoutList.push(newMod)

      let newStateObj = {shoutOutData: copyOfShoutList}
      this.setState(newStateObj)
   },

   render: function(evt){

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
                     <button className="btn btn-block btn-success btn-lg" onClick={this._addSubmission}>+</button>
               </div>

               {/* (2) PASS STATE DOWN TO COMPONENT's PROPS (.shoutData for the component) */}
               <ShoutOutList shoutData={ this.state.shoutOutData }/>

            </div>

         </div>
      )
   }
})


const ShoutOutList = React.createClass({
   //
   render: function(){
      {/* (3) MAP OVER COMPONENT PROPS AND RETURN AN ARRAY OF <ShoutItem/> JSX components */}
      let arrayOfShoutOutJSX = this.props.shoutData.map(function(smod){
         return (
            {/* (3a) note: pass the model to props on <ShoutItem/>  */}
            <ShoutItem shoutModl={smod} key={smod.cid}/>
         )
      })

      return (
         <div className="col-sm-8">
            <h2>¡Shout Outs!</h2>

            <div className="shoutout">

               {arrayOfShoutOutJSX}

            </div>
         </div>

      )
   }
})

const ShoutItem = React.createClass({
   {/* (4) RETURN JSX FOR EACH MODEL -- ACCESS MODEL's ATTRIBUTES */}
   render: function(){
      return (
         <blockquote  style={{background: 'indianred', color: '#fff', padding: '4rem'}}>
            <p>{this.props.shoutModl.get('msg')}</p>
            <img src={this.props.shoutModl.get('imgLink')} alt="..."/>
            <cite>{this.props.shoutModl.get('from')}</cite>
         </blockquote>
      )
   }
})


ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
