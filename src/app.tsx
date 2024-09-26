import { BrowserRouter as R, Routes, Route } from 'react-router-dom' 
import Layout from './layout/layout'
import VisitorList from './page/history'
import Finder from './page/finder'
import Login from './page/login'
import { AuthWrapper } from './middleware/auth'
import { Create } from './page/create'

function App() {

  return (
    <R>
      <Routes>
        <Route path='/auth/login' element={ <Login /> } />
        <Route path='/' element={ <AuthWrapper children={ <Layout props={<VisitorList />}/> } /> } />
        <Route path='/finder' element={ <AuthWrapper children={ <Layout props={<Finder />}/> } /> } />
        <Route path='/create-car' element={ <AuthWrapper children={ <Layout props={<Create type="CAR" />}/> } /> } />
        <Route path='/create-scooter' element={ <AuthWrapper children={ <Layout props={<Create type="SCOOTER" />}/> } /> } />
      </Routes>
    </R>
  )
}

export default App