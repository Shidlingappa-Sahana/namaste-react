import UserClass from './UserClass'
import React from 'react'

class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent Constructor");
        
    }

    componentDidMount(){
        console.log("This is parent component");
        
    }

    render(){
        return (
            <div>
                <h1>About Us</h1>
                <UserClass name="Ajay" location="Delhi"/>
            </div>
        )
    }
}

export default About;