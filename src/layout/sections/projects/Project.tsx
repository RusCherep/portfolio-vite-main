import styled from "styled-components";
import {Icon} from "../../../components/icons/Icon.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common ts.tsx";

type ProjectPropsType = {
    src: string
    title: string
    text: string
    textStack: string


}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <FlexWrapper direction={"column"} justify={"flex-start"} padding={"15px"}>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TextStack>{props.textStack}</TextStack>
                <LinkContainer>
                        <Link href={"#"}>
                            <Icon iconId={"linkVector"} viewBox={"0 0 20 20"} hover={true} hoverColor={"black"}/>
                            Live Preview
                        </Link>

                        <Link href={"#"}>
                            <Icon iconId={"gitHubVector"}  color={"black"} hoverColor={"black"} hover={true}/>
                            View Code
                        </Link>
                </LinkContainer>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    background-color: ${theme.colors.lightModeBg};
    max-width: 375px;
    width: 100%;
    min-height: 570px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    margin: 10px 10px;
    padding: 0;
   
`

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    max-width: 375px;
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h4`
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightLinkColor,
        weight: 500,
        FMax: 28,
        FMin: 22,
        lineHeight: 0.92857
    })}
    
    text-align: center;
    padding: 15px 0;
`

const TextStack = styled.span`
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightHeadersColor,
        weight: 400,
        FMax: 16,
        FMin: 14,
        lineHeight: 1.625
    })}
    
    padding: 15px 0;

`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`


const Text = styled.span`
    
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightContentTextPrimary,
        weight: 300,
        FMax: 18,
        FMin: 16,
        lineHeight: 1.44
    })}
    
    padding: 10px 0;
`

const Link = styled.a`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: 400 16px / 1.625 "Poppins", sans-serif;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.lightContentTextPrimary};
    
    &:hover{
        transform: scale(1.2);
    }
`
