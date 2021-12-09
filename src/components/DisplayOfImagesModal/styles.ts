import styled from "styled-components";

export const CurrentImgContainer = styled.div`
  width: 42rem;
  height: 42rem;
  border-radius: 1.5rem;
  margin-bottom: 11rem;
  position: relative;

  @media (max-width: 650px) {
    width: 32rem;
    margin-bottom: -0.5rem;
  }

  @media (max-width: 400px) {
    width: 26.2rem;
    margin-bottom: -6.5rem;
  }
`;

export const CurrentImg = styled.div`
  width: 100%;
  height: 42rem;
  border-radius: 1.5rem;

  overflow: hidden;
  background-size: cover;
  background-position: center;

  @media (max-width: 650px) {
    height: 32rem;
  }

  @media (max-width: 400px) {
    height: 26.2rem;
  }
`;

export const CloseButton = styled.button`
  position: relative;
  background-color: transparent;
  color: var(--gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  margin-left: auto;
  cursor: pointer;
  top: 3.5rem;

  transition: color .2s;

  &:hover {
    color: var(--gray-300);
  } 
`;

export const AllImgsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const BackImg = styled.button`
  display: flex;
  align-items: center;

  border: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--gray-50);
  padding: 0 0 0 0.2rem;
  box-shadow: 0rem 0rem 2rem 0.5rem rgba(0, 0, 0, 0.3);
  position: relative;
  left: -2.5rem;
  top: 56%;
  cursor: pointer;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 650px) {
    top: 45%;
  }

  @media (max-width: 400px) {
    width: 4rem;
    height: 4rem;
    padding: 0 0 0 0.1rem;
    top: 38%;
    left: -1.9rem;
  }
`;

export const NextImg = styled.button`
  display: flex;
  align-items: center;

  border: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--gray-50);
  padding: 0 0 0 0.7rem;
  box-shadow: 0rem 0rem 2rem 0.5rem rgba(0, 0, 0, 0.3);
  position: relative;
  top: -56%;
  right: -94%;
  cursor: pointer;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 650px) {
    top: -43%;
  }

  @media (max-width: 400px) {
    width: 4rem;
    height: 4rem;
    padding: 0 0 0 0.2rem;
    top: -35%;
    right: -92%;
  }
`;
