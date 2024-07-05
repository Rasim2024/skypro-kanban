import styled, { css } from 'styled-components';


export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Container = styled.div`
max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;

  &:after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
}
`; 

export const Hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
`;

export const ContainerSignin = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;


