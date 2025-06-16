import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

type PhotoBgVisualPropsType = {
    rotate: string
}


export const PhotoBgVisualStyled = styled.div<PhotoBgVisualPropsType>`
    content: "";
    display: inline-block;
    height: 440px;
    width: 440px;
    border: 1px solid;
    transform: rotate(${props => props.rotate}) translate(-50%, -50%);
    border-image: linear-gradient(90deg, ${theme.colors.lightContentTextSecondary} 0%, #FFFFFF 65%) 1;

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;

    @media ${theme.media.mobile} {
        height: 275px;
        width: 275px;
    }
    
`