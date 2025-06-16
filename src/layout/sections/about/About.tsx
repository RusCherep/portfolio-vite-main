import styled from "styled-components";
import {TemplateWorkExperience} from "./TamplateWorkExperience.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
// import cubeBackgroundImage from '../../../assets/images/drawing.svg';
import {font} from "../../../styles/Common ts.tsx";

export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                <WorkExperienceContainer>
                    <StyledAboutH2>About me</StyledAboutH2>
                    <ContentText>The Generator App is an online tool that helps you to export ready-made
                        templates ready to work as your future website. It helps you to combine slides,
                        panels and other components and export it as a set of static files: HTML/CSS/JS.</ContentText>

                    <StyledAboutH2>Work Experience</StyledAboutH2>
                    <TemplateWorkExperience contentPost={"Junior"}
                                            workSchedule={"Full time"}
                                            nameCompany={"Name Company"}
                                            location={"Belarus"}
                                            workTime={"Sep 2021 - Dec 2022"}/>

                    <TemplateWorkExperience contentPost={"Junior"}
                                            workSchedule={"Full time"}
                                            nameCompany={"Name Company"}
                                            location={"Belarus"}
                                            workTime={"Sep 2021 - Dec 2022"}/>

                    <TemplateWorkExperience contentPost={"Junior"}
                                            workSchedule={"Full time"}
                                            nameCompany={"Name Company"}
                                            location={"Belarus"}
                                            workTime={"Sep 2021 - Dec 2022"}/>

                    <TemplateWorkExperience contentPost={"Junior"}
                                            workSchedule={"Full time"}
                                            nameCompany={"Name Company"}
                                            location={"Belarus"}
                                            workTime={"Sep 2021 - Dec 2022"}/>


                    <StyledAboutH2>Education</StyledAboutH2>

                    <TemplateWorkExperience contentPost={"Junior"}
                                            workSchedule={"Full time"}
                                            nameCompany={"Name Company"}
                                            location={"Belarus"}
                                            workTime={"Sep 2021 - Dec 2022"}/>
                </WorkExperienceContainer>

            </Container>
        </StyledAbout>
    );
};


const StyledAbout = styled.section`
    display: flex;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    
    &::before {
        content: "";
        position: absolute ;
        background-image: url('/src/assets/images/drawing.svg');
        background-repeat: no-repeat;
        background-size: contain;
        width: 946px;
        height: 1019px;
        top: 150px;
        right: -350px;
        z-index: -1; /* Помещаем под основной контент */
        
    }
    
`

const StyledAboutH2 = styled.h2`
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightHeadersColor,
        weight: 700,
        FMax: 42,
        FMin: 36,
        lineHeight: 1.2381,
        spacing: "-0.01em"
    })}
    padding: 35px 0;
    
`

const ContentText = styled.span`
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightContentTextPrimary,
        weight: 400,
        FMax: 18,
        FMin: 16,
        lineHeight: 1.44
    })}
    padding:0 15px;
`
const WorkExperienceContainer = styled.div`
    
    max-width: 710px;
    width: 100%;
    

    @media ${theme.media.mobile} {
        ${StyledAboutH2}{
            display: flex;
            justify-content: center
        }
        
        ${ContentText}{
            display: flex;
            justify-content: center
        }
        
    }
`