import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../assets/home.svg'
import { ReactComponent as BagIcon } from '../assets/bag.svg'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navLinks = [
        { to: "/", icon: <HomeIcon /> },
        { to: "/bag", icon: <BagIcon /> }
    ]
    return (
        <Wrapper>
            <ul>
                {navLinks.map(({ to, icon }) => <li>
                    <NavLink to={to}>
                        {icon}
                    </NavLink>
                </li>)}
            </ul>
        </Wrapper>
    );
}

export default Nav;

const Wrapper = styled.div`
    height: 100%;
    padding: 16px;
    background: white;
    border-radius: 8px;

    ul li {
        list-style: none;
        margin-bottom: 32px;
    }

    ul li a {
        padding: 8px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul li a.active {
        background: #1A1F16;

        svg path {
            fill: white;
        }
    }

`;
