import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollUp from './scrollup';
import Nav from './nav';
import Index from './index';
import Contact from './contact';
import About from './about';
import Footer from './footer';
function App() {
	return (
		<React.Fragment>
			<ScrollUp />
			<Nav />
			<Routes>
				<Route Index path="omlo" element={<Index />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}
export default App;