import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {UnderSectionTitle} from "../../../components/UnderSectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./Project.tsx";
import imageBallons from "../../../assets/images/imageBaloons.webp"
import imageIsland from "../../../assets/images/imageIland.webp"
import imageLake from "../../../assets/images/imageLake.webp"
import imageMount from "../../../assets/images/imageMount.webp"
import imageCity from "../../../assets/images/imageSity.webp"
import imageWood from "../../../assets/images/imageWood.webp"
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Projects = () => {
    return (
        <StyledWorks id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <UnderSectionTitle> Things I’ve built so far</UnderSectionTitle>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} >
                    <Project src={imageBallons} title={"Project Title"}
                             textStack={"Tech stack : HTML , JavaScript, SASS, React"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Project src={imageIsland} title={"Project Title"}
                             textStack={"Tech stack : HTML , JavaScript, SASS, React"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Project src={imageLake} title={"Project Title"}
                             textStack={"Tech stack : HTML , JavaScript, SASS, React"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Project src={imageMount} title={"Project Title"}
                             textStack={"Tech stack : HTML , JavaScript, SASS, React"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Project src={imageCity} title={"Project Title"}
                             textStack={"Tech stack : HTML , JavaScript, SASS, React"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Project src={imageWood} title={"Project Title"}
                             textStack={"Tech stack : HTML , JavaScript, SASS, React"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: ${theme.colors.lightModeBg};
    
`