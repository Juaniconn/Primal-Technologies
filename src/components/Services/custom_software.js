import React from 'react'
import Header from './../basic/Header'
import Footer from './../basic/Footer'

const fields = [
    {
        icon: '', title: 'Web Application', content: (
            <p>
                Primal can guide you through the digital jorney and build web applications
                tailored to your needs and expectations. By using the lastest technologies, we put functionality,
                performance, design and usability at the heart of your enterprise development.
        </p>
        )
    },
    {
        icon: '', title: 'Mobile App', content: (
            <p>
                Primal mobile development center offers one-stop service from user experience
                strategy consulting, interface design to custom development. Over the past 9
                years, we have accumulated a wealth of project experience in different
                industries, including enterprise management, education, travel, social
                networking, entertainment, sports, music, finance, news, health care, and
                photography, etc.
        </p>
        )
    },
    {
        icon: '', title: 'Client Relationship Management (CRM)', content: (
            <p>
                Using a bespoke CRM system can help companies transfer the way they interact
                with their customers. Without the need to purchase the license of off-the-shelf
                CRM system, you can add functions based on your specific business requirements,
                so it can easily scale with any changes to your business process and targets.
        </p>
        )
    },
    {
        icon: '', title: 'Internet of Things (IoT)', content: (
            <p>
                Primal IoT R&amp;D center focuses on helping traditional hardware vendors,
                manufacturers and small &amp; medium-sized platform service providers quickly build
                custom IoT platform that is stable, reliable, safe and controllable and
                eventually realize the upgrading and transformation of the Internet.
        </p>
        )
    },
    {
        icon: '', title: 'Business Data Analysis', content: (
            <p>
                Through professional business data analysis service, Primal helps enterprises
                collect, process, analyze and mine a large amount of data generated in
                production, sales and other links and then convert them into commercial value,
                enabling enterprises to optimize production process, improve production
                efficiency and fully perceive user behavior, so as to help enterprises
                continuously improve products/services and maintain competitive advantage.
        </p>
        )
    },
    {
        icon: '', title: 'AR/VR/MR', content: (
            <p>
                Primal provides strong support for customers in their product R&amp;D and market
                development by applying technologies as Mix Reality(MR), Virtual Reality (VR),
                Augmented Reality (AR) and 3D modeling.
        </p>
        )
    },
    {
        icon: '', title: 'E-Commerce System', content: (
            <p>
                We have already built e-business platform for many companies from the world’s
                top 500 to small start-ups, involving the projects of different sizes in electronic products,
                FMCG, auto & spare parts, luxury goods, agriculture and other fields, and accumulated a wealth of
                custom development experience in such links as account management, product display, shopping cart management,
                trading platform, inventory management, logistics tracking and evaluation system.
        </p>
        )
    }
];

const Custom_software = () => {
    return (
        <div className="main_customSoftware">
            <Header />
            <section>
                <div className="container flex flex-d-col flex-ai-center">
                    <h2 className="section-title brand">Custom Software</h2>
                    <div className="w-100 cards_container">
                        {fields.map((field, i) => (
                            <div className="card" style={{ backgroundColor: (i % 2 === 0) ? '#eee' : '#ddd' }}>
                                <div className="card_header white" style={{ backgroundColor: (i % 2 === 0) ? '#0290b2' : '#004151' }}>
                                    {field.title}
                                </div>
                                <div className="card_body">
                                    {field.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Custom_software;