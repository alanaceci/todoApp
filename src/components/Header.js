import React from 'react';
import '../css/Header.css'
class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hour: new Date().getHours(), 
        };
    }

    componentDidMount() {
        this.changeHour();
    }
    
    changeHour(){
        const date = new Date();
        const hour = date.getHours();
        this.setState({
            hour
        })
    }

    render() {
        return(
            <div className="title">
                <h1> {this.state.hour < 12 ? 'Good morning, Alana!' : 'Good afternoon, Alana!'} </h1>
            </div>
        );
    }

}

export default Header;