import { Route, Routes } from 'react-router-dom';

import Header from "../components/header/Header";
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import CreatePost from '../components/create/CreatePost';

function App() {

	return (
		<>	
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/create-post' element={<CreatePost />} />
			</Routes>
		</>
	)
}

export default App
