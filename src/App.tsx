import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/Protected'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/protected'
          element={
            <PrivateRoute>
              <Protected /> {/*  Protected component */}
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Home />} /> {/* Default route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
