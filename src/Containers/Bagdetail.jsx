import React from 'react';
import styled from 'styled-components';

const Bagdetail = ({ elements }) => {
    return (
        <Wrapper>
            <h2>Check your Bag Items</h2>
            {elements?.map(({ image, title, model, price, description, stars }) => {
                return (
                    <Productdetail>
                        <div className="product-imges"><img className="img" src={`http://142.93.229.148/${image}`} alt="" /></div>
                        <div className="product-text">
                            <p className='product-title'>{title}</p>
                            <p className='product-model'>{model}</p>
                            <p className='product-about'>{description}</p>
                            <p className='product-start'>{stars}</p>
                            <p className='product-price'>{price}</p>
                        </div>
                    </Productdetail>
                )
            })}
        </Wrapper>
    );
}

export default Bagdetail;

const Wrapper = styled.div`
    height: 100%;
    padding: 30px 90px;
    overflow-y: auto;

    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 48.83px;
        line-height: 59px;
        color: #1A1F16;
        margin-bottom: 34px;
    }
`;

const Productdetail = styled.div`
    width: 100%;
    height: 288px;
    background-color: white;
    border-radius: 21px;
    margin-bottom: 24px;
    padding: 24px;
    display: flex;
    gap: 32px;

    .product-imges {
        height: 100%;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    
        .img {
            width: 200px;
        }
    }

    .product-text {

        .product-title {
            font-weight: 400;
            font-size: 31.25px;
            line-height: 38px;
            color: #1A1F16;
            margin-bottom: 8px;
        }

        .product-model {
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #60695C;
        }

        .product-about {
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #1A1F16;
            margin-top: 8px;
            margin-bottom: 8px;
        }

        .product-price {
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #1A1F16;
            margin-top: 40px;
        }
    }
`;
