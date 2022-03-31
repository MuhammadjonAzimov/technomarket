import React from 'react';
import styled from 'styled-components';

const Bag = ({ elements }) => {
    return (
        <Wrapper>
            <h2>Bag</h2>
            {elements?.map(({ image }) => {
                return (
                    <BagItem>
                        <img src={`http://142.93.229.148/${image}`} alt="" />
                    </BagItem>
                )
            })}
        </Wrapper>
    );
}

export default Bag;

const Wrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-auto-rows: 80px;
    gap: 16px;
    position: relative;
    padding-top: 50px;

    h2 {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
    }
`;

const BagItem = styled.div`
    width: 80px;
    height: 80px;
    background: white;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;
