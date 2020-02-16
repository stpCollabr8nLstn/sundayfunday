import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import bugIcon from '../../styles/bug-solid.svg';
import caretDown from '../../styles/angle-down-solid.svg';

import { colors } from '../../styles/theme';

const Button = styled.button`
  appearance: none;
  background-color: ${colors.primary};
  border: none;
`;

const RibbonItemLabel = styled.div`
transform: translate3d(-100%, 0, 0);
height: 0;
color: transparent;
  a  {
    text-decoration: none;
    color: ${colors.accent};
    height: 0;
    color: transparent;
  }
  ${Button} {
    height: 0;
    color: transparent;
    :focus {
      outline: none;
    }
  }
`;

const RibbonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.primary};
  color: ${colors.softWhite};
  font-size: 16px;
  width: 64px;
  height: 100vh;
  position: absolute;

  transition: transform .5s ease-in;
  

  :hover {
    width: 33%;
    ${RibbonItemLabel} {
      height: 100%;
      transform: translate3d(100%, 0, 0);
      color: ${colors.softWhite};
      a  {
        text-decoration: underline;
        text-decoration-color: ${colors.accent};
        color: ${colors.accent};
        height: 100%;
      }

      ${Button} {
        height: 100%;
        font-size: 16px;
        color: ${colors.softWhite};
      }
    }
  }
`;

const ulListStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 8px 16px 8px 32px;
  padding: 0;
`;


const RibbonItemIcon = styled.img`
  background-color: ${colors.primary};
  position: relative;
  z-index: 100;
  height: 20px;
  width: 20px;
  
`;


const RibbonMenuContent = styled.ul`
  ${ulListStyles}
  width: 25%;
  position: absolute;
`;

const RibbonMenuItem = styled.li`
  display: flex;
  margin: 8px 16px 8px 0;
`;



const Ribbon = () => {
  const [showSubNav, toggleShowSubNav] = useState(false);
  return (
    <RibbonContainer>
      <RibbonMenuContent>
        <RibbonMenuItem>
          <RibbonItemIcon src={caretDown } alt="caret icon" />
          <RibbonItemLabel><Button onClick={() => toggleShowSubNav(!showSubNav)}>Create</Button></RibbonItemLabel>
        </RibbonMenuItem>
        {showSubNav && (
            <>
              <RibbonMenuItem>
                <RibbonItemIcon src={bugIcon} alt="bug icon" />
                <RibbonItemLabel><Link to="/bug">Bug</Link></RibbonItemLabel>
              </RibbonMenuItem>
              
              <RibbonMenuItem>
                <RibbonItemIcon />
                <RibbonItemLabel><Link to="/epic">Epic</Link></RibbonItemLabel>
              </RibbonMenuItem>
            </>
          )}
      </RibbonMenuContent>
    </RibbonContainer>
  )
};

export default Ribbon;