import React from 'react'

const Service_Content = (props) => {
    return(
        <div className="service_content">
            <div className="service_sec_info">
                <h2>About</h2>
                {props.content}
                {props.content}
                {props.content}
            </div>
        </div>
    )
}

export default Service_Content