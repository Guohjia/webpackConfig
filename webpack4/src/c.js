import React from 'react';

export default class Hey extends React.Component{
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







// import Vue from 'vue';

// var myApp = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })


// export default myApp