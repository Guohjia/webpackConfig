import React from 'react';

export default class Hello extends React.Component{
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