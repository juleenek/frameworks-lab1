import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { SomeSpan } from './Components';
import { stackColor } from '../../styledHelpers/colors';

const Wrapper = styled.div`
  border: 10px solid ${stackColor.black};
`;

const SecondSpan = styled(SomeSpan)`
  border: 3px solid yellow;
`;

const ExampleDiv = styled.div<{ isActive: boolean }>`
  background: yellow;
  ${(props) =>
    props.isActive &&
    css`
      background: blue;
    `}
`;

export const Menu: FC = () => {
  return (
    <Wrapper>
      <SecondSpan>Jakiś tekst</SecondSpan>
      <ExampleDiv isActive>Jakiś div</ExampleDiv>
      <ExampleDiv isActive={false}>Jakiś div</ExampleDiv>
      <Link to='posts'>Posts</Link>
      <Link to='/'>Home</Link>
    </Wrapper>
  );
};
