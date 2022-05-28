import { Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './Layout/Home'
import Footer from './Layout/Footer/Footer'
import Kyrgyzstan from './Layout/Kyrgyzstan/Kyrgyzstan'
import Tajikistan from './Layout/Tajikistan/Tajikistan'
import KgTours from './Layout/Tours/KgTours'
import TjTours from './Layout/Tours/TjTours'
import PairTours from './Layout/Tours/PairTours'
function App() {
	return (
		<div className='App'>
			<Suspense fallback={''}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/kyrgyzstan' element={<Kyrgyzstan />} />
					<Route path='/tajikistan' element={<Tajikistan />} />
					<Route path='/kgtours' element={<KgTours />} />
					<Route path='/tjtours' element={<TjTours />} />
					<Route path='/pairtours' element={<PairTours />} />
				</Routes>
			</Suspense>
			<Footer />
		</div>
	)
}

export default App
