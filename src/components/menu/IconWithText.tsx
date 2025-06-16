import {Icon} from "../icons/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common ts.tsx";

type IconWithTextPropsType = {
    iconId:string
    iconHeight?: string
    iconWidth?: string
    iconViewBox?: string
    iconHover?: boolean
    text:string
}

export const IconWithText = (props:IconWithTextPropsType) => {
    return (
        <IconWithTextStyled>
            <Icon iconId={props.iconId} height={props.iconHeight} width={props.iconWidth} viewBox={props.iconViewBox} hover={props.iconHover}/>
            <ContentWorkExperience>{props.text}</ContentWorkExperience>
        </IconWithTextStyled>
    );
};

const IconWithTextStyled = styled.div`
    display: flex;
    justify-content: center;
`

const ContentWorkExperience = styled.span`
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightContentTextSecondary,
        weight: 500,
        FMax: 12,
        FMin: 12,
        lineHeight: 2.33333,
        spacing: "0.08em"
    })}
    
    padding: 0 5px;
    flex-wrap: wrap;
`