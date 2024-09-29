import styled from "styled-components";
export const Container = styled.div`
height: 150px;
text-align: center;
background-color: teal;

`;

export const Header=styled.h1``

export const Title =styled.div`
padding-top: 20px;
color: afff;

`;


export const Container2=styled.div`
max-width: 1120px;
width: 98%;
margin: 0 auto;
display: flex   ;
gap:20px;
margin-top:-50px;
justify-content: space-around;

`;
export const Containeritem=styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
border-radius:5px;
padding: 5px 15px;
width: 30%;

    @media (mix-width:500px)
    {width:20px;


    p{
font-size:12px
    }
    span{
        font-size: 20px;
    }
    svg{
display: none;


    }};
`
export const HEADER=styled.header`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
gap:10px;

svg{
width: 25px;
height: 25px;
}
`


export const Headertitle= styled.p`

font-size:20px;
`
export const Total = styled.span`
font-size:30px;
font-weight: bold;
`
//parte do form
export const Container3=styled.div`
max-width: 1120px;
margin: 20px auto;
width: 98%;
background-color: #fff;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
display: flex;
justify-content: space-around;
padding: 14px 0px;
gap: 10px;

@media (max-width: 750px ) {
    display: grid;
}

`

 export const InputContener= styled.div`
 display: flex;
flex-direction:column;

 `
 export const Label= styled.label``;

 
export const Input=styled.input`
outline: none;
border-radius:5px;
padding: 5px 10px;
font-size: 15px;
border: 1px solid #ccc;
`
export const  RadioGroup= styled.div`
display: flex;
align-items: center;

input{
margin-left: 20px;
accent-color: black;
margin-top: 0;

}

`
export const Botton=styled.button`
padding: 5px 10px;
border:none;
border-radius:5px;
cursor: pointer;
color: white;
background-color: teal;
`

//Grid

export const Table=styled.table`
width: 98%;
background-color: #fff;
    padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
max-width: 1120px;
margin: 20px auto;
`
export const Thead = styled.thead``

export const  Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
border-bottom: inset;
padding-bottom: 5px;
text-align: ${(props) => (props.alignCenter ? "center" : "start")  };
width: ${(props) => (props.width ?  props.width + "%" : "auto")  };


`
//Griditem
export const TrGri =styled.tr``
export const Td = styled.td`
padding-top:15px ;
text-align: ${(props) => (props.alignCenter ? "center" : "start")  };
word-break:break-all;

svg{
width: 18px;
    height: 18px;
}




`
