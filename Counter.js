import React, { Component } from "react";

class Counter extends Component{

    // state = {
    //     count: this.props.counter.value
    // }

    // handleClick = () =>
    // {
    //    this.setState({count: this.state.count+1})
    // };



    
    render(){
        // let classes = "badge m-2 badge-";
        // classes += this.props.counter.value ===0 ? "warning" : "primary";

        return (
        <div>
            {/* <span className={classes}>{this.formatcount()}</span> */}
            <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button>

            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger m-2">Delete 
            </button>
          
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value ===0 ? "warning" : "primary";
        return classes; 


    }

    

    formatcount()
    {
        const { value } = this.props.counter;
        return value===0 ? "ZERO" : value;
    }
}

export default Counter;