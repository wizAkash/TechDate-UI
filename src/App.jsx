import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import SignUp from './components/Signup'
import { Provider } from 'react-redux'
import { store } from './utils/redux/store'
import Feed from './components/Feed'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body/>}>
              <Route index element={<Feed/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
