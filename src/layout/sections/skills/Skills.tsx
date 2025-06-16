import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {UnderSectionTitle} from "../../../components/UnderSectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Skills = () => {
    return (
        <StyledSkills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <UnderSectionTitle> Technologies I’ve been working with recently</UnderSectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} flexGrow={1} >
                    <Icon iconId={"htmlVectorFull"} width={"128"} height={"128"} viewBox={"0 0 128 128"}/>
                    <Icon iconId={"cssVector"} width={"128"} height={"128"} viewBox={"0 0 128 128"}/>
                    <Icon iconId={"jsVector"} width={"128"} height={"128"} viewBox={"0 0 32 32"} fill={"#000000"}/>
                    <Icon iconId={"gitHubVector"} width={"128"} height={"128"} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"reactVector"} width={"128"} height={"128"} viewBox={"0 0 256 256"}/>
                    <Icon iconId={"webStormVector"} width={"128"} height={"128"} viewBox={"0 0 256 256"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color:${theme.colors.lightModeBg};
    
    
    @media screen and (max-width: 922px) {
        align-items: center;
         svg{
             width: 30%;
         }
    }


    @media screen and (${theme.media.mobile}) {
        align-items: center;
        svg{
            width: 40%;
        }
    }
    
`