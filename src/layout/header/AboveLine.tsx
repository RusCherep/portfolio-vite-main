import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {IconLinks} from "../../components/IconLinks.tsx";
import {theme} from "../../styles/Theme.tsx";


export const AboveLineFooter = () => {
    return (
        <StyledAboveLine>
            <Logo logoId={"firstIconHeader"} height={"45px"} width={"45px"} viewBox="0 0 24 24" color = {`${theme.colors.lightHeadersColor}`}/>

            <FlexWrapper align={"center"}>
                <StyledText>+375333529450</StyledText>

                <StyledText> ruslik.cherep@gmail.com</StyledText>
                <IconLinks iconColor={`${theme.colors.lightHeadersColor}`} iconColorHover={`${theme.colors.lightHeadersColor}`} hover={true} hoverScale={true}/>
            </FlexWrapper>
        </StyledAboveLine>
    );
};

const StyledAboveLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.lightLineColor};
        position: absolute;
        bottom: 0 ;
        left: -10px;
        right: -10px;
    }
    ${FlexWrapper}{
        
        @media ${theme.media.tablet} {
            flex-direction: column;

        }
    }
    @media ${theme.media.tablet} {
        flex-direction: column;

    }
`

const StyledText = styled.span`
    font: 400 18px / 1.44444 "DM Sans", sans-serif;
    color: ${theme.colors.lightHeadersColor};
    padding: 0 15px;
`