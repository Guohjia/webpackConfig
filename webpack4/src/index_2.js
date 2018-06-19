import React from 'react';
import _ from 'lodash';

export default class Two extends React.Component{
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

// setTimeout(function(){
//     let _ = require('lodash')
// },300)