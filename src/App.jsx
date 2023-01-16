import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
