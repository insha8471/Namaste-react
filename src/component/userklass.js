import React from "react";

class UserKlass extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            count : 0,
            count1 : 0
        };

        console.log(this.state.count);
    }

    
    render() {
        console.log(this.state);

        const {name, location} = this.props;
        const {count} = this.state;
        console.log(count);

        return (
            <div className="user-card">
                <h1>class</h1>
                <h4>count : {count}</h4>
                <button style={{padding:"10px 30px", cursor:"pointer"}} onClick = {() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Button</button>
            <div>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>contact : @insha8471</h4>
            </div>
        </div>
        )
    }
}

export default UserKlass;