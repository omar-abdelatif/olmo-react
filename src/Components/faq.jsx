import { Link } from 'react-router-dom';
function FAQ() {
    const FAQ = [
        {
            id: 1,
            title: 'Can I see OLMO in action before purchasing?',
            desc: 'Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae'
        },
        {
            id: 2,
            title: 'Do you have a free trial?',
            desc: 'Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec and neque. Blandit justo aliquam molestie nunc sapien'
        },
        {
            id: 3,
            title: 'What are the requirements for using OLMO?',
            desc: 'An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor integer congue undo magna at pretium purus pretium'
        },
        {
            id: 4,
            title: 'How does OLMO handle my privacy?',
            desc: 'Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula',
            answer: 'An enim nullam tempor sapien gravida donec congue leo metus. Vitae arcu mollis blandit integer at velna'
        },
        {
            id: 5,
            title: 'Can I use OLMO on different devices?',
            li1: '- Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien',
            li2: '- Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus'
        },
        {
            id: 6,
            title: 'I have an issue with my account',
            li1: '- Fringilla risus, luctus mauris orci auctor purus',
            li2: '- Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet augue luctus'
        },
    ]
    return (
        <section className="faq">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="faq-txts text-center">
                            <p>FREQUENTLY ASKED QUESTIONS</p>
                            <h2>Everything you need to know before getting started</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {FAQ.map((item => (
                        <div className="col-lg-6">
                            <div className="faq-item">
                                <div className="faq-item-title">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <p>{item.answer}</p>
                                    <ul className="faq-list">
                                        <li>{item.li1}</li>
                                        <li>{item.li2}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )))}
                    <div className="col-lg-12">
                        <div className="ask">
                            <p>
                                <span>Have more questions?</span>
                                <Link to='/contact'>Ask your question here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default FAQ;