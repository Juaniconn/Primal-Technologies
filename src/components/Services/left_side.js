import React from 'react'

class Left_side extends React.Component {
    render(){
        return (
            <div className="left_side">
                <h1> {this.props.option[1]} </h1>
            </div>
        )
    }
}

export default Left_side