import styled from 'styled-components';
import Product from '../Components/Product';

const Products = ({ elements, addtobag }) => {
    return (
        <Wrapper>
            {elements?.map((product) => <Product data={product} addtobag={addtobag} />)}
        </Wrapper>
    );
}

export default Products;

const Wrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
    grid-auto-flow: dense;
    gap: 16px;
`;
