import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import SignUp from './components/Signup'
import { Provider } from 'react-redux'
import { store } from './utils/redux/store'
import Feed from './components/Feed'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Body/>}>
              <Route path='/' element={<Feed/>}/>
              <Route path = '/login' element={<Login/>}/>
              <Route path = '/signup' element={<SignUp/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
