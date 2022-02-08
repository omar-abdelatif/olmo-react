import React from 'react';
function Pricing() {
    const Pricingtable = [
        {
            id: 1,
            title: 'SEO STARTER',
            price: '8.99',
            class: 'pricingtable-header',
            buttonClass: 'btn btn-outline-success',
            duration: 'per month',
            features: [
                '10 Analytics Campaign',
                '800 Change Keywords',
                '3 Free Optimization',
                '25 Social Media Reviews',
                'Upgrate Options',
                'Extra Features',
                '12/5 Free Support',
            ],
        },
        {
            id: 2,
            popular: 'popular',
            title: 'Basic',
            price: '9.99',
            class: 'pricingtable-header pt-4',
            duration: 'per month',
            features: [
                '20 Analytics Campaign',
                '1,200 Change Keywords',
                '15 Optimization',
                '1K Social Media Reviews',
                'Upgrate Options',
                'Extra Features',
                '12/7 Free Support',
            ],
            buttonClass: 'btn btn-primary',
        },
        {
            id: 3,
            title: 'Basic',
            buttonClass: 'btn btn-outline-success',
            price: '9.99',
            class: 'pricingtable-header',
            duration: 'per month',
            features: [
                'Unlimited Analytics Campaign',
                'Unlimited Change Keywords',
                'Unlimited Optimization',
                '5K Social Media Reviews',
                'Upgrate Options',
                'Extra Features',
                '24/7 Free Support',
            ],
        }
    ]
    return (  
        <section className="pricing" id='pricing'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pricing-title">
                            <span>PRICING & PACKAGES</span>
                            <h3>Scale your business to the next level with our experts</h3>
                            <p>
                                Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus,
                                blandit and cursus varius and magnis sapien
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Pricingtable.map(pricing => (
                        <div className="col-lg-4">
                            <div className="pricingtable wow fadeInUp">
                                <div className={pricing.popular}>
                                    <p>{pricing.popular}</p>
                                </div>
                                <div className={pricing.class}>
                                    <p className="price-plan">{pricing.title}</p>
                                    <p className="price">$ {pricing.price}</p>
                                    <p className="duration">{pricing.duration}</p>
                                </div>
                                <div className="pricingtable-body">
                                    {pricing.features.map(feature => (
                                        <p className="feature">{feature}</p>
                                    ))}
                                    <button className={pricing.buttonClass}>Get Started</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-12">
                        <div className="pricingtable-footer">
                            <p className="footer-text">
                                The above prices do not include applicable taxes based on your billing address.
                                The final price will be displayed on the checkout page, before the payment is completed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Pricing;