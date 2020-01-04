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
        <section>
            <div className="container flex flex-d-col ta-center">
                <h2 className="section-title brand fade-in-up">Why choose us?</h2>
                <div className="values_container white">
                    {values.map((value, i) => {
                        return (
                            <div key={i} className="rotate-in">
                                <i className={`${value.icon} value_icon`}></i>
                                <h3 className="value_title">{value.title}</h3>
                                <p className="value_body">{value.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Values