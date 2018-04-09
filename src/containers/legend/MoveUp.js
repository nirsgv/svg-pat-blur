import React from 'react'
import styled from 'styled-components'


const MoveUp = ({layers, index, move_up, moveUp=true, greySpan=false}) => {
    console.log(layers, index,move_up);
    const myIndex = index;
    return(
        <div className={`move-${moveUp?'up':'down'}-wrp`} onClick={() => {
            !greySpan && (moveUp ? move_up(layers,myIndex,myIndex+1) : move_up(layers,myIndex,myIndex-1));
        }}>
            <MoveUpElement className={`move-${moveUp?'up':'down'}-element ${!greySpan ? 'active' : 'deactive'}`}>
                {moveUp ? '+ move front' : '- move back'}
            </MoveUpElement>
        </div>
    );
};

const MoveUpElement = styled.div`
    border-radius: 50%;
    overflow: hidden;
`;

export default MoveUp;

