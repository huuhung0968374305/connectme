import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/Protected'
import Signup from './pages/Signup'
import { ConfigProvider } from 'antd'
import ChatPage from './pages/Index'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Arial, sans-serif;',
          colorText: 'rgba(0, 0, 0, 0.9)'
        }
      }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/index' element={<ChatPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
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
    </ConfigProvider>
  )
}

export default App
