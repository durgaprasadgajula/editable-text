import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
// Styled component definition

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
`;

export const ChildContainer1 = styled.div`
    box-sizing: border-box;
    background-size: cover;
    position: relative;
    background-position: center;
    display: flex;
    justify-content: end;
    padding: 30px;
    color: white;
    min-height: 50vh;
    flex-direction: column;
    background-image: url(https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png);
`;
export const ChildContainer2 = styled.div`
    min-height: 50vh;
    background-color: #152850;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    /* align-items: center; */
`;

export const Span = styled.span`
    font-size: 30px;
    color: white;
`;

export const SongsHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
`;
export const SearchInputContainer = styled.div`
    position: relative;
    width: 300px; /* Set the width as needed */
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
`;

export const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px; /* Adjust the right spacing as needed */
    color: #ccc; /* Adjust the color as needed */
    cursor: pointer;
`;

export const H1 = styled.h1`
    margin: 0; /* Reset margin to avoid spacing issues */
`;

export const PlayList = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Img = styled.img`
    height: 90px;
    width: 150px;
`;
export const PlayListContainer = styled.div`
    color: white;
    max-height: 50vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin: 10px;
    /* Use "auto" to show scrollbars when needed */
`;

export const Delete = styled.button`
    height: 40px; /* Set your desired height */
    width: 50px; /* Set your desired width */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent; /* Set your desired background color */
    color: #fff; /* Set your desired text color */
    border: none;
    cursor: pointer;
`;

export const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    color: white;
`;
