import React from 'react';
function Features() {
    const FeaturesData = [
        {
            id: '1',
            icon: 'fas fa-map-marker-alt',
            title: 'LOCAL SEO',
            desc: 'Porta semper lacus cursus feugiat and primis ultrice'
        },
        {
            id: '2',
            icon: 'far fa-chart-bar',
            title: 'E-Commerce SEO',
            desc: 'Porta semper lacus cursus feugiat and primis ultrice'
        },
        {
            id: '3',
            icon: 'fas fa-chart-pie',
            title: 'Advanced Analytics',
            desc: 'Porta semper lacus cursus feugiat and primis ultrice'
        },
        {
            id: '4',
            icon: 'fas fa-mouse',
            title: 'PPC Management',
            desc: 'Porta semper lacus cursus feugiat and primis ultrice'
        }
    ]
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="features-texts">
                            <h2>Get More Customers Online</h2>
                            <p>
                                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus,
                                blandit and cursus varius and magnis sapien
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {FeaturesData.map(feature => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={feature.id}>
                                <div className="feature-box wow fadeInUp">
                                    <div className="feature-icon">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
export default Features;