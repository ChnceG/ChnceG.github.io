import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

export default function App() {
  return (
    <div>
      <Navbar />
      <h1 className='text-3xl underline'>React App</h1>
      <Welcome />
    </div>
  )
}
