import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from '../../styles/theme';

const RibbonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.primary};
  color: ${colors.softWhite};
  font-size: 16px;
  width: 33%;
  height: 100vh;
  position: absolute;
`;

const ulListStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 8px 16px 8px 32px;
  padding: 0;
`;

const RibbonItemLabel = styled.div`

`;
const RibbonItemIcon = styled.div`
  background-color: ${colors.primary};
  position: relative;
  z-index: 100;
`;


const RibbonMenuContent = styled.ul`
  ${ulListStyles}
  width: 25%;
  position: absolute;

  :hover {
    ${RibbonItemLabel} {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

const RibbonMenuItem = styled.li`
  transition: transform .5s ease-in;
  transform: translate3d(-100%, 0, 0);
`;

const Ribbon = () => (
  <RibbonContainer>
    <RibbonMenuContent>
      <RibbonMenuItem>
        <RibbonItemIcon>+</RibbonItemIcon>
        <RibbonItemLabel>Create</RibbonItemLabel>
      </RibbonMenuItem>
      
      <RibbonMenuItem>
        <RibbonItemIcon>+</RibbonItemIcon>
        <RibbonItemLabel><Link to="/bug">Bug</Link></RibbonItemLabel>
      </RibbonMenuItem>
      
      <RibbonMenuItem>
        <RibbonItemIcon>+</RibbonItemIcon>
        <RibbonItemLabel><Link to="/epic">Epic</Link></RibbonItemLabel>
      </RibbonMenuItem>
    </RibbonMenuContent>
  </RibbonContainer>
);

export default Ribbon;