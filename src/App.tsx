import { ConfigProvider } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import ChatPage from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup'

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
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='*' element={<Login />} />
          </Route>
          <Route
            path='/index'
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
