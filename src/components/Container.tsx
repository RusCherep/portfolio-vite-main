import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Container = styled.div`
    max-width: 1223px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    border: 2px solid red;
    
    @media ${theme.media.tablet} {
        padding:0 10px;
    }
`