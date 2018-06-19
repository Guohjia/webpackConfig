import React from 'react';

export default class Ha extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            say:'hello'
        }
    }

    componentDidMount(){
        console.log('I Say'+this.state.say)
    }
}










// // import _ from 'lodash';

// // let fn =_.extend;

// // export default fn

// import React from 'react';

// // setTimeout(function(){
// //     let _ = require('lodash')
// // },300)
// // var fn=1;

// // button.addEventListener('click', event => {
// //     import('lodash')
// //     .then(dialogBox => {
// //         dialogBox.open();
// //     })
// //     .catch(error => {
// //         /* Error handling */
// //     })
// // });

