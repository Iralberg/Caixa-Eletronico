import React, {useState} from "react";
import * as C from './styles'
import Grid from "./grid";
export default function Form({handleAdd, transactionsList, setTransactionsList}){
const[desc, setDesc] =useState('');
const[amount, setAmount] =useState('');
const[isExpense, setExpense] =useState(false);
const generateID = () => Math.round(Math.random() * 1000)


function handleSave (){
if(!desc || !amount){
alert('informe a descrição e o valor!');
return;
}
else if (amount < 1){alert('o valor tem  tem que ser positivo!')

}
const transaction = {
id: generateID(),
desc: desc,
amount: amount,
expense: isExpense,
};
handleAdd(transaction);
setDesc("")
setAmount("")


}

return(
<div>
    <C.Container3>
    <C.InputContener>
        <C.Label>Descrição</C.Label>
    <C.Input
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    />
    </C.InputContener>
    
    <C.InputContener>
        <C.Label>Valor</C.Label>
    <C.Input
    value={amount}
    type="number"
    onChange={(e) => setAmount(e.target.value)}
    />
    
    
    </C.InputContener>
    <C.RadioGroup>
    <C.Input
    type="radio"
    id="rIncome"
    defaultChecked
    name="group1"
    onChange={() => setExpense(!isExpense)}
    />
    <C.Label htmlFor="rIncome">Entrada</C.Label>
    <C.Input
    type="radio"
    id="rExpense"
    name="group1"
    onChange={() => setExpense(!isExpense)}/>
    <C.Label htmlFor="rExpense">Saída</C.Label>
    </C.RadioGroup>
    <C.Botton onClick={handleSave}>ADICIONAR</C.Botton>
    
    </C.Container3>
    <Grid  itens={transactionsList} setItens={setTransactionsList}/>
</div>

)


}