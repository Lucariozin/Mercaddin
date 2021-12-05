import styled from "styled-components";

export const CurrentImgContainer = styled.div`
  width: 42rem;
  height: 42rem;
  border-radius: 1.5rem;
  margin-bottom: 11rem;
  position: relative;
`;

export const CurrentImg = styled.div`
  width: 100%;
  height: 42rem;
  border-radius: 1.5rem;

  overflow: hidden;
  background-size: cover;
  background-position: center;
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
`;
