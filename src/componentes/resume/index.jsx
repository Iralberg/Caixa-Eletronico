import React from "react";
import * as C from '../styles'
import Resumeitem from "../Resumitem";
import {
FaRegArrowAltCircleUp,
FaRegArrowAltCircleDown, 
FaDollarSign,
}from "react-icons/fa"

function Resume({income, expense, total }){
    return(
<C.Container2>
<Resumeitem title='Entradas' Icon={FaRegArrowAltCircleUp} value={income}/>
<Resumeitem title='Saídas' Icon={FaRegArrowAltCircleDown} value={expense}/>
<Resumeitem title='Total' Icon={FaDollarSign} value={total}/>
</C.Container2>

    )


}
export default Resume