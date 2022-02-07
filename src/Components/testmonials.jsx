function Testmonials() {
    const TestmonialsData = [
        {
            id: 1,
            class: 'testmonials-item child-one wow fadeInUp mb-4',
            img: 'omlo/imgs/review-author-3.jpg',
            name: 'Joel Peterson',
            position: 'Marketing Manager',
            opinion: 'Sapien sem at sagittis congue augue massa varius an egestas suscipit'
        },
        {
            id: 2,
            class: 'testmonials-item child-two wow fadeInUp mb-4',
            img: 'omlo/imgs/review-author-2.jpg',
            name: 'Jogn Doe',
            position: 'Internet Surfer',
            opinion: 'Mauris donec magnis sapien congue an augue egestas undo vitae purus cursus integer a congue magna'
        },
        {
            id: 3,
            class: 'testmonials-item child-one wow fadeInUp',
            img: 'omlo/imgs/review-author-5.jpg',
            name: 'Jennifer Harper',
            position: 'App Developer',
            opinion: 'Augue massa varius egestas suscipit magna a tempus aliquet blandit'
        }
    ]
    return (
        <div className="testmonials">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last">
                        <div className="testmonials-slide">
                            {TestmonialsData.map(slider => (
                                <div className={slider.class} key={slider.id}>
                                    <div className="testmonials-item-img">
                                        <img src={slider.img} alt="profile" />
                                    </div>
                                    <div className="testmonials-item-content">
                                        <span>{slider.name}</span>
                                        <span>{slider.position}</span>
                                        <p>{slider.opinion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testmonials-texts wow fadeInRight">
                            <p>WHAT PEOPLE SAY</p>
                            <h2>You're in good hands. See what our clients say about OLMO.</h2>
                            <p>
                                Quaerat sodales sapien euismod blandit vitae ipsum primis undo and cubilia laoreet
                                augue and luctus magna dolor luctus egestas sapien vitae nemo egestas volute and turpis
                                dolores aliquam quaerat sodales a sapien
                            </p>
                            <button className="btn btn-outline-dark">Read All Reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Testmonials;