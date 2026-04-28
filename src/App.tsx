import './App.css'
import { Route, Routes} from 'react-router-dom'
import { IncidentsProvider } from './context/DataContext'
import { Dashboard } from './pages/Dashboard'


function App() {


  return (

    <IncidentsProvider>
      <Routes>
    <p>hola</p>

    <Route path='/' element = {<Dashboard />} />
    <Route path='/summary' element = {<summary />} />

      
    </Routes>
    </IncidentsProvider>

  )
}

export default App
