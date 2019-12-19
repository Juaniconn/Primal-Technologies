import React from 'react'

function Values() {

    const defalutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

    const values = [
        { icon: 'icon-chart-area', title: 'We are responsable', body: defalutText },
        { icon: 'icon-flag-outline', title: 'We are creative', body: defalutText },
        { icon: 'icon-chat-bubble-dots', title: 'We listen our community', body: defalutText },
        { icon: 'icon-heart1', title: 'We love minimalism', body: defalutText },
        { icon: 'icon-magic-wand', title: 'We have magic', body: defalutText },
        { icon: 'icon-time', title: 'We are punctual', body: defalutText },
    ];

    return (
        <div className="values">
            <div className="values_container">
                <div className="values_title_container">
                    <h2 className="values_title">Why choose us?</h2>
                </div>
                <div className="values_itemsWrapper">
                    {values.map(value => {
                        return (
                            <div key={value.text} className="values_item">
                                <i className={`${value.icon} value_icon`}></i>
                                <p className="value_title">{value.title}</p>
                                <p className="value_body">{value.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Values