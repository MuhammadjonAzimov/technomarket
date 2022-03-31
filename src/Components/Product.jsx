import React from 'react';
import styled from 'styled-components';
import atb from '../assets/addtobag.svg'

const Product = ({ data, addtobag }) => {
    return (
        <Wrapper type={data.type}>
            <div className="product__image-container">
                <img src={`http://142.93.229.148/${data.image}`} alt="" />
            </div>
            <div className="product__info-container">
                <span className='product__info-title'>{data.title}</span>
                <span className='product__info-model'>{data.model}</span>
                <span className='product__info-price'>$ {data.price}</span>

                <img onClick={() => addtobag(data)} className='product__info-atb' src={atb} alt="" />
            </div>
        </Wrapper>
    );
}

export default Product;

const Wrapper = styled.div`
    padding: 16px; 
    grid-column: span ${({ type }) => type === "laptop" ? "2" : "1"};

    .product__image-container {
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 22px;
        padding: inherit;
        margin-bottom: 8px;
        height: 232px;

        img {
            height: 100%;
        }
    }

    .product__info-container * {
        display: block;
    }

    .product__info-container {
        padding: 8px;
        position: relative;
    }

    .product__info-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1A1F16;
    }

    .product__info-model {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.02em;
        color: #60695C;
        margin-top: 8px;
        margin-bottom: 21px;
    }

    .product__info-price {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1A1F16;
    }

    .product__info-atb {
        position: absolute;
        right: 8px;
        bottom: 8px;
    }
`;
