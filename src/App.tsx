import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/Protected'
import Signup from './pages/Signup'
import { ConfigProvider } from 'antd'
import ChatPage from './pages/Index'
import PublicRoute from './components/PublicRoute'

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
          <Route element={<PublicRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
          </Route>
          <Route
            path='/index'
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
