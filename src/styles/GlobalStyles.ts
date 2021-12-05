import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;

    --gray-50: #F7FAFC;
    --gray-100: #EDF2F7;
    --gray-300: #CBD5E0;
    --gray-400: #A0AEC0;
    --gray-500: #718096;
    --gray-600: #4A5568;
    --gray-700: #2D3748;

    --orange-100: #FEEBC8;
    --orange-300: #F6AD55;
    --orange-400: #ED8936;
    --orange-500: #DD6B20;

    --red-500: #E53E3E;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    background-color: var(--gray-100);

    font-family: "Poppins", sans-serif;

    &::-webkit-scrollbar {
      width: 0.9rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--gray-400);
      border-radius: 2rem;

      &:hover {
        background-color: var(--gray-500);
      }
    }
  }

  .display-of-images-modal-overlay {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .display-of-images-modal-content {
    outline: none;
    margin-bottom: 3rem;
  }
`;
