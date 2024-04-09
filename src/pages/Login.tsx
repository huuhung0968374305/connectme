import { FacebookFilled, GoogleOutlined } from '@ant-design/icons'
import { Col, Form, FormProps, Input, Row } from 'antd'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../hooks/useAuth'
import { AuthService } from '../services/Auth'

type FieldType = {
  username?: string
  email?: string
  password?: string
}

const initialValues = {
  username: ''
}

function Signin() {
  const { login } = useContext(AuthContext)
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const { error, user } = await AuthService.login(values)
    if (error) {
      alert(error)
      return
    }
    if (user) {
      login(user)
    }
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className='min-h-screen bg-blue-100 flex justify-center items-center flex-col'>
      <div className='w-48 py-4'>
        <svg
          viewBox='0 0 225 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M37.2652 14.793C37.2652 14.793 45.0769 20.3653 41.9523 29.531C41.9523 29.531 41.3794 31.1975 39.0359 34.4264L42.473 37.9677C42.473 37.9677 43.3063 39.4779 41.5877 39.9987H24.9228C24.9228 39.9987 19.6108 40.155 14.8196 36.9782C14.8196 36.9782 12.1637 35.2075 9.76807 31.9787L18.6213 32.0308C18.6213 32.0308 24.2978 31.9787 29.766 28.3332C35.2342 24.6878 37.4215 18.6988 37.2652 14.793Z'
            fill='#60A5FA'></path>
          <path
            d='M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z'
            fill='#2563EB'></path>
          <path
            d='M61.98 20.2C61.98 18.2773 62.4093 16.56 63.268 15.048C64.1453 13.5173 65.3307 12.332 66.824 11.492C68.336 10.6333 70.0253 10.204 71.892 10.204C74.076 10.204 75.9893 10.764 77.632 11.884C79.2747 13.004 80.4227 14.5533 81.076 16.532H76.568C76.12 15.5987 75.4853 14.8987 74.664 14.432C73.8613 13.9653 72.928 13.732 71.864 13.732C70.7253 13.732 69.708 14.0027 68.812 14.544C67.9347 15.0667 67.244 15.8133 66.74 16.784C66.2547 17.7547 66.012 18.8933 66.012 20.2C66.012 21.488 66.2547 22.6267 66.74 23.616C67.244 24.5867 67.9347 25.3427 68.812 25.884C69.708 26.4067 70.7253 26.668 71.864 26.668C72.928 26.668 73.8613 26.4347 74.664 25.968C75.4853 25.4827 76.12 24.7733 76.568 23.84H81.076C80.4227 25.8373 79.2747 27.396 77.632 28.516C76.008 29.6173 74.0947 30.168 71.892 30.168C70.0253 30.168 68.336 29.748 66.824 28.908C65.3307 28.0493 64.1453 26.864 63.268 25.352C62.4093 23.84 61.98 22.1227 61.98 20.2ZM91.3122 30.252C89.8189 30.252 88.4749 29.9253 87.2802 29.272C86.0855 28.6 85.1429 27.6573 84.4522 26.444C83.7802 25.2307 83.4442 23.8307 83.4442 22.244C83.4442 20.6573 83.7895 19.2573 84.4802 18.044C85.1895 16.8307 86.1509 15.8973 87.3642 15.244C88.5775 14.572 89.9309 14.236 91.4242 14.236C92.9175 14.236 94.2709 14.572 95.4842 15.244C96.6975 15.8973 97.6495 16.8307 98.3402 18.044C99.0495 19.2573 99.4042 20.6573 99.4042 22.244C99.4042 23.8307 99.0402 25.2307 98.3122 26.444C97.6029 27.6573 96.6322 28.6 95.4002 29.272C94.1869 29.9253 92.8242 30.252 91.3122 30.252ZM91.3122 26.836C92.0215 26.836 92.6842 26.668 93.3002 26.332C93.9349 25.9773 94.4389 25.4547 94.8122 24.764C95.1855 24.0733 95.3722 23.2333 95.3722 22.244C95.3722 20.7693 94.9802 19.64 94.1962 18.856C93.4309 18.0533 92.4882 17.652 91.3682 17.652C90.2482 17.652 89.3055 18.0533 88.5402 18.856C87.7935 19.64 87.4202 20.7693 87.4202 22.244C87.4202 23.7187 87.7842 24.8573 88.5122 25.66C89.2589 26.444 90.1922 26.836 91.3122 26.836ZM110.876 14.264C112.724 14.264 114.217 14.852 115.356 16.028C116.494 17.1853 117.064 18.8093 117.064 20.9V30H113.144V21.432C113.144 20.2 112.836 19.2573 112.22 18.604C111.604 17.932 110.764 17.596 109.7 17.596C108.617 17.596 107.758 17.932 107.124 18.604C106.508 19.2573 106.2 20.2 106.2 21.432V30H102.28V14.488H106.2V16.42C106.722 15.748 107.385 15.2253 108.188 14.852C109.009 14.46 109.905 14.264 110.876 14.264ZM129.387 14.264C131.235 14.264 132.729 14.852 133.867 16.028C135.006 17.1853 135.575 18.8093 135.575 20.9V30H131.655V21.432C131.655 20.2 131.347 19.2573 130.731 18.604C130.115 17.932 129.275 17.596 128.211 17.596C127.129 17.596 126.27 17.932 125.635 18.604C125.019 19.2573 124.711 20.2 124.711 21.432V30H120.791V14.488H124.711V16.42C125.234 15.748 125.897 15.2253 126.699 14.852C127.521 14.46 128.417 14.264 129.387 14.264ZM153.723 21.908C153.723 22.468 153.686 22.972 153.611 23.42H142.271C142.364 24.54 142.756 25.4173 143.447 26.052C144.138 26.6867 144.987 27.004 145.995 27.004C147.451 27.004 148.487 26.3787 149.103 25.128H153.331C152.883 26.6213 152.024 27.8533 150.755 28.824C149.486 29.776 147.927 30.252 146.079 30.252C144.586 30.252 143.242 29.9253 142.047 29.272C140.871 28.6 139.947 27.6573 139.275 26.444C138.622 25.2307 138.295 23.8307 138.295 22.244C138.295 20.6387 138.622 19.2293 139.275 18.016C139.928 16.8027 140.843 15.8693 142.019 15.216C143.195 14.5627 144.548 14.236 146.079 14.236C147.554 14.236 148.87 14.5533 150.027 15.188C151.203 15.8227 152.108 16.728 152.743 17.904C153.396 19.0613 153.723 20.396 153.723 21.908ZM149.663 20.788C149.644 19.78 149.28 18.9773 148.571 18.38C147.862 17.764 146.994 17.456 145.967 17.456C144.996 17.456 144.175 17.7547 143.503 18.352C142.85 18.9307 142.448 19.7427 142.299 20.788H149.663ZM155.576 22.244C155.576 20.6387 155.903 19.2387 156.556 18.044C157.21 16.8307 158.115 15.8973 159.272 15.244C160.43 14.572 161.755 14.236 163.248 14.236C165.171 14.236 166.758 14.7213 168.008 15.692C169.278 16.644 170.127 17.988 170.556 19.724H166.328C166.104 19.052 165.722 18.5293 165.18 18.156C164.658 17.764 164.004 17.568 163.22 17.568C162.1 17.568 161.214 17.9787 160.56 18.8C159.907 19.6027 159.58 20.7507 159.58 22.244C159.58 23.7187 159.907 24.8667 160.56 25.688C161.214 26.4907 162.1 26.892 163.22 26.892C164.807 26.892 165.843 26.1827 166.328 24.764H170.556C170.127 26.444 169.278 27.7787 168.008 28.768C166.739 29.7573 165.152 30.252 163.248 30.252C161.755 30.252 160.43 29.9253 159.272 29.272C158.115 28.6 157.21 27.6667 156.556 26.472C155.903 25.2587 155.576 23.8493 155.576 22.244ZM177.992 17.708V25.212C177.992 25.7347 178.113 26.1173 178.356 26.36C178.617 26.584 179.047 26.696 179.644 26.696H181.464V30H179C175.696 30 174.044 28.3947 174.044 25.184V17.708H172.196V14.488H174.044V10.652H177.992V14.488H181.464V17.708H177.992ZM205.592 10.456V30H201.672V17.288L196.436 30H193.468L188.204 17.288V30H184.284V10.456H188.736L194.952 24.988L201.168 10.456H205.592ZM223.887 21.908C223.887 22.468 223.85 22.972 223.775 23.42H212.435C212.528 24.54 212.92 25.4173 213.611 26.052C214.302 26.6867 215.151 27.004 216.159 27.004C217.615 27.004 218.651 26.3787 219.267 25.128H223.495C223.047 26.6213 222.188 27.8533 220.919 28.824C219.65 29.776 218.091 30.252 216.243 30.252C214.75 30.252 213.406 29.9253 212.211 29.272C211.035 28.6 210.111 27.6573 209.439 26.444C208.786 25.2307 208.459 23.8307 208.459 22.244C208.459 20.6387 208.786 19.2293 209.439 18.016C210.092 16.8027 211.007 15.8693 212.183 15.216C213.359 14.5627 214.712 14.236 216.243 14.236C217.718 14.236 219.034 14.5533 220.191 15.188C221.367 15.8227 222.272 16.728 222.907 17.904C223.56 19.0613 223.887 20.396 223.887 21.908ZM219.827 20.788C219.808 19.78 219.444 18.9773 218.735 18.38C218.026 17.764 217.158 17.456 216.131 17.456C215.16 17.456 214.339 17.7547 213.667 18.352C213.014 18.9307 212.612 19.7427 212.463 20.788H219.827Z'
            fill='currentColor'></path>
        </svg>
      </div>

      <div className='bg-white px-8 py-6 mx-12 shadow-md rounded-lg w-5/6 max-w-sm'>
        <h1 className='text-2xl text-start text-gray-600 font-bold  mb-4'>
          Login
        </h1>
        <Form
          requiredMark={'optional'}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout='vertical'>
          <Row gutter={36}>
            <Col span={24}>
              <Form.Item
                label='Email Address'
                name='email'
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Invalid email address!' }
                ]}>
                <Input
                  className='px-4 py-2'
                  placeholder='youremail@example.com'
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={36}>
            <Col span={24}>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please enter your password!' },
                  {
                    min: 6,
                    message: 'Password must be at least 6 characters long'
                  },
                  { max: 20, message: 'Password cannot exceed 20 characters' }
                ]}>
                <Input.Password className='px-4 py-2' placeholder='password' />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <button
              className='w-full h-full px-4 py-1 text-white rounded-lg bg-blue-600 hover:bg-blue-700 text-lg'
              type='submit'>
              Account Login
            </button>
          </Form.Item>
        </Form>
        <div className='mt-8 text-center'>
          <span className='text-sm text-gray-500'>OR USE WITH</span>
        </div>
        <div className='flex items-center justify-center mt-4 space-x-4'>
          <div className='bg-slate-200 flex rounded-lg px-10 py-2 hover:bg-blue-200 hover:text-blue-500 cursor-pointer space-x-2'>
            <GoogleOutlined></GoogleOutlined>
            <span>Google</span>
          </div>
          <div className='bg-slate-200 rounded-lg px-10 flex justify-center items-center py-2 hover:bg-blue-200 hover:text-blue-500 cursor-pointer space-x-2'>
            <FacebookFilled className='rounded-lg'></FacebookFilled>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className='my-6'>
        Don't have account?{' '}
        <Link to='/register' className='text-blue-500'>
          Register
        </Link>
      </div>
    </div>
  )
}

export default Signin
