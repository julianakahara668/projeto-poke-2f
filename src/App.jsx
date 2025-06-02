import {Routes, Route, Router} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './pokeGrid'

const App = () => {

  return (
    <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="pokeflex" element={<PokeFlex/>} />
      <Route path="pokeGrid" element={<PokeGrid/>} />

    </Routes>
  )
}

export default App