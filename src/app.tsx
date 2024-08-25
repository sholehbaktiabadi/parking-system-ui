import { BrowserRouter as R, Routes, Route } from 'react-router-dom' 
import Layout from './layout/layout'
import VisitorList from './page/visitor-list'
import Finder from './page/finder'

function App() {

  return (
    <R>
      <Routes>
        <Route path='/' element={ <Layout props={<VisitorList />}/> } />
        <Route path='/finder' element={ <Layout props={<Finder />}/> } />
      </Routes>
    </R>
  )
}

export default App