import styled, { css } from "styled-components";

type ContainerProps = {
  isActive: boolean;
};

export const Container = styled.div`
  ${({ isActive }: ContainerProps) => isActive ? css`
    width: 7rem;
    height: 7rem;
    background-color: var(--gray-300);
    border-radius: 0.8rem;
    border: 0.2rem solid var(--orange-400);
    filter: brightness(0.8);
    cursor: pointer;
    flex-shrink: 0;
  ` : css`
    width: 7rem;
    height: 7rem;
    background-color: var(--gray-300);
    border-radius: 0.8rem;
    border: 0.2rem solid var(--gray-100);
    cursor: pointer;
    flex-shrink: 0;


    transition: filter .2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

export const Img = styled.div`
  width: 100%;
  height: 7rem;
  border-radius: 0.7rem;

  overflow: hidden;
  background-size: cover;
  background-position: center;
`;
