import React from 'react';
import Hero from './hero';
import Features from './features';
import AnalyticsReview from './analytics_review';
import Marketing from './marketing';
import Idea from './idea';
import Grow from './grow';
import Counter from './counter';
import Video from './video';
import Quality from './quality';
import Testmonials from './testmonials';
import Partner from './partners';
import Pricing from './pricing';
import FAQ from './faq';
import Trial from './trial';
function Index() {
    return (  
        <React.Fragment>
            <Hero />
            <Features />
            <AnalyticsReview />
            <Marketing />
            <Idea />
            <Grow />
            <Counter />
            <Video />
            <Quality />
            <Testmonials />
            <Partner />
            <Pricing />
            <FAQ />
            <Trial />
        </React.Fragment>
    );
}
export default Index;