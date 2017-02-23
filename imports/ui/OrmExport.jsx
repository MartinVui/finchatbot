import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Scenarios } from '../api/scenarios.js';

// import { exportJSON } from '../processes/ormExport.js';

// class OrmExport extends Component {
//
//     constructor( ) {
//         super( );
//         this.state = {
//             json: "",
//             processed: ""
//         };
//     }
//
//     handleChange( event ) {
//
//         const json = event.target.value;
//         const result = importJSON(json);
//         const processed = result;
//
//         this.setState({
//             "json" : json,
//             "processed" : processed
//         });
//     }
//
//     handleSubmit( event ) {
//
//         event.preventDefault();
//     }
//
//     render( ) {
//
//         let questions = [];
//         if(typeof(this.state.processed.questions)==="object"){
//             for (key in this.state.processed.questions) {
//                 const val = this.state.processed.questions[key];
//                 questions.push(<pre key={val._id}>{JSON.stringify(val, null, 2)}</pre>);
//                 // questions.push(<br/>);
//             }
//         };
//
//         let formGenerators = [];
//         if(typeof(this.state.processed.formGenerators)==="object"){
//             for (key in this.state.processed.formGenerators) {
//                 const val = this.state.processed.formGenerators[key];
//                 // console.log(key);
//                 // console.log(val);
//                 formGenerators.push(<pre key={val._id}>{JSON.stringify(val, null, 2)}</pre>)
//             }
//         };
//
//         let scenarios = [];
//         if(typeof(this.state.processed.scenarios)==="object"){
//             for (key in this.state.processed.scenarios) {
//                 const val = this.state.processed.scenarios[key];
//                 // console.log(key);
//                 // console.log(val);
//                 scenarios.push(<pre key={val._id}>{JSON.stringify(val, null, 2)}</pre>)
//             }
//         };
//
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit.bind(this)}>
//                     <textarea
//                         onChange={this.handleChange.bind(this)}>
//                     </textarea>
//                 </form>
//                 <h1>Questions</h1>
//                 <div>{questions}</div>
//                 <h1>FormGenerators</h1>
//                 <div>{formGenerators}</div>
//                 <h1>Scenarios</h1>
//                 <div>{scenarios}</div>
//             </div>
//         );
//     }
// };
//
// export default createContainer( ( ) => {
//     return {};
// }, Orm );
