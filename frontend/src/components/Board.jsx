import React , {useState, useEffect} from "react" ; 
import styled from "styled-components" ; 


const Container = styled.div`
    display : flex, 
    
`

function Board(props) { 
    const intialData = {tasks : {} , columns : {} , columnOrder : {}};
    const [baord , setBoard ] = useState(intialData);

    useEffect(() =>{ 
        fetchBoard().then(data => setBoard(data)).then(console.log)
    } , [])


    async function fetchBoard() { 
        const response = await fetch( "http://127.0.0.1:8000/board" ) ; 
        const data = await response.json( ) ; 
        console.log(data); 
        return data.board;
    }
    return (
        <Container>
            board1123
        </Container>
    )
}


export default Board;