import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props)

        this.state={
            count:0,
            count2:2,
            userInfo:{
                login:'Trump',
                location:"US"
            }
        }
    }

    async componentDidMount(){
        console.log("This is child component");
        const data = await fetch('https://api.github.com/users/shidlingappa')
        const json = await data.json()
        console.log(json);
        
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("component did update called");
        
    }

    componentWillUnmount(){
        console.log("Called will unmount");
        
    }


    render() {
        return <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increase count</button>
        <h1>Count2:{this.state.count2}</h1>
        <h1>Name: {this.state.userInfo.login}</h1>
        <h2>Location: {this.state.userInfo.location}</h2>
    </div>
    }
}

export default UserClass;