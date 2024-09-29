import React from "react"
import { useRef, useState } from "react"
import { v4 } from 'uuid'
import Home from "../../componentes/Home"
import {Product, TransButton } from "../Compras/styles"
import HeaderCli from "../../componentes/headerclient"


function Contato(){
    const inputRef = useRef()
    const [produtos, setProdutos] = useState([])

    function cliclarnoBotao() {
        setProdutos([{ id: v4(), nome: inputRef.current.value,  }, ...produtos])
        inputRef.current.value = ''
    }
    function deletarProduto(id) {
        setProdutos(produtos.filter(produto => produto.id !== id))

    }

return (
<div>
<Home/>
    <HeaderCli/>
<div className="container-md  ms-5  d-flex">
<div class='bg-secondary-subtle me-3 p-3'><h1>cadastro de cliente</h1>
<form>
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label"> Nome</label>
    <input type="email" class="form-control" id="exampleInputNameEmail1" aria-describedby="emailHelp" ref={inputRef} placeholder="Insira seu Nome"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">E-mail</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder=" Insira seu E-mail"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
</form>
<button class='bg-success' onClick={cliclarnoBotao}>
Salvar


</button>
</div>


<div class='bg-success-subtle p-3' >
    <h1>clientes cadastrados</h1>
  
    <button class='bg-success ' onClick={cliclarnoBotao}>
Salvar


</button>
{produtos.map((produto) => (
    <Product class='' key={produto.id}>
        <p>{produto.nome}</p>
        <TransButton onClick={() => deletarProduto(produto.id)}>🗑️</TransButton>
    </Product>))}
</div>
</div>



</div>

)

}
export default Contato