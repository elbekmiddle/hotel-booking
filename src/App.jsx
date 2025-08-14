import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
	const isOwenerPath = useLocation().pathname.includes()

	return <div>
		{!isOwenerPath && <NavBar />}
		<div className='min-h-[70vh]'>
		<Routes>
			<Route path='/' element={<Home/>} />
		</Routes>
		</div>
	</div>
}

export default App
