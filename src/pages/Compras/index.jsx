import { useRef, useState} from "react"
import { v4 } from 'uuid'
import { AddButton, Container, Product, TransButton } from "../Compras/styles"
import Home from "../../componentes/Home"

function Compras() {
const inputRef = useRef()
const [produtos, setProdutos] = useState([])

    function cliclarnoBotao() {
 setProdutos([{id: v4(), nome:inputRef.current.value }, ...produtos])
 inputRef.current.value = ''
}
function deletarProduto(id) {
setProdutos(produtos.filter(produto => produto.id !== id))

}

    return(


<div>
<Home/>
<Container>
    <h1>Lista de Compras</h1>
   <input placeholder="produtos..." ref={inputRef} />
   <AddButton onClick={cliclarnoBotao}>Adicionar</AddButton>

{produtos.map((produto) => (
    <Product key={produto.id}>
        <p>{produto.nome}</p>
        <TransButton onClick={() => deletarProduto(produto.id)}>🗑️</TransButton>
    </Product>
))


}
   
</Container>
</div>
    )
}
export default Compras