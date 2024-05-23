import React from "react";
class UserClass extends React.Component {
    constructor(){
        super();
        this.state= {
            userInfo: {
                name:"Dummy",
                location: "Dummy"
            }
        }
    }

    async componentDidMount (){
        const data =await fetch("https://api.github.com/users/nikhil0223");
        const json =await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
    }
    render() {
        return(
            <div className="user-card">
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.location}</h3>
            </div>
        );
    }
};

export default UserClass;