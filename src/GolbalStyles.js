import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
        transition: all 0.3s ease-in-out;
    }

    .noOverflow {
        overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
    }
    
    :root {
        --headerBackgroundColor: ${({ theme }) => theme.header.backgroundColor};
        --timebar-color: ${({ theme }) => theme.timebar.color};
    }

    .timebar {
        color: ${({ theme }) => theme.timebar.color};
        background-color: ${({ theme }) => theme.timebar.backgroundColor};
        padding: 10px 0;
        text-align: center;
    }
    
    .lockScreen {
        color: ${({ theme }) => theme.lockScreen.color};
        background-color: ${({ theme }) => theme.lockScreen.backgroundColor};
    }

    .borderRight {
        border-right: ${({ theme }) => theme.border};
    }

    .borderBottom {
        border-bottom: ${({ theme }) => theme.border};
    }

    .searchBox {
        background-color: ${({ theme }) => theme.searchBox.backgroundColor};
        border-left: ${({ theme }) => theme.searchBox.borderLeft};
        border-right: ${({ theme }) => theme.searchBox.borderRight};
    }
`;