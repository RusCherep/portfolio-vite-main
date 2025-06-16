import {Logo} from "./logo/Logo.tsx";
import styled from "styled-components";

type IconLinksPropsType = {
    iconColor?: string;
    iconColorHover?: string;
    hover?: boolean
    hoverScale?: boolean


}

export const IconLinks = (props: IconLinksPropsType) => {
    return (

        <StyledIconLinksContainer>
            <StyledIconLinks   >
                <Logo
                    logoId="gitHubVector"
                    color={props.iconColor}
                    hoverColor={props.iconColorHover}
                    hover={props.hover}
                    hoverScale={props.hoverScale}
                    linkHref={"https://github.com/RusCherep"}
                />
            </StyledIconLinks>

            <StyledIconLinks >
                <Logo
                    logoId="linkedinVector"
                    color={props.iconColor}
                    hoverColor={props.iconColorHover}
                    hover={props.hover}
                    hoverScale={props.hoverScale}
                    linkHref={"https://www.linkedin.com/in/руслан-черепковский-2924a3367/"}
                />
            </StyledIconLinks>

            <StyledIconLinks>
                <Logo
                    logoId="telegramLinkVector"
                    height={"32"}
                    width={"32"}
                    viewBox="0 0 22 22"
                    color={props.iconColor}
                    hoverColor={props.iconColorHover}
                    hover={props.hover}
                    hoverScale={props.hoverScale}
                    linkHref={"https://t.me/Ryslanek"}
                />
            </StyledIconLinks>
        </StyledIconLinksContainer>
    );
};

const StyledIconLinksContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
`

const StyledIconLinks = styled.div`

`