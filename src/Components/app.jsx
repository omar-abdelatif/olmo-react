import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollUp from './scrollup';
import Nav from './nav';
import Index from './index';
import Contact from './contact';
import About from './about';
import Feature from './feature';
import Pricing from './price';
import FAQS from './faqs';
import Footer from './footer';
function App() {
	return (
		<React.Fragment>
			<ScrollUp />
			<Nav />
			<Routes>
				<Route index element={<Index />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
				<Route path="feature" element={<Feature />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="faqs" element={<FAQS />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}
export default App;