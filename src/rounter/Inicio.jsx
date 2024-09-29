import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../componentes/Home'
import Compras from '../pages/Compras'
import Cliente from '../pages/cliente/cliente'
import Banco from '../pages/banco/banco'

function Inicio() {


    return(
        
<BrowserRouter>
<Routes>
    
<Route path='*' element={<Home/>}/>

<Route path='/compras' element={<Compras/>}/>
<Route path='/Banco' element={<Banco/>} />
<Route path='/cliente' element={<Cliente/>} />

</Routes>

</BrowserRouter>
    )
    
    }
    export default Inicio