import React from 'react';
import './Person.css'
//import Radium from 'radium';
import styled from 'styled-components';

const person = (props) => {
const StyleDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }
    `;

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    //}
    return (
        // <div style={style} className="Person">
        <StyleDiv>
        < p onClick = { props.click } > I am { props.name } and i am { props.age } years old! </p >
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        {/* // </div> */}
        </ StyleDiv>
    )
};

export default person ;


