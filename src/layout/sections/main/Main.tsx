import styled from "styled-components";
import photo from '../../../assets/images/myPhoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {PhotoBgVisualStyled} from "./PhotoBGVisual.tsx";
import {font} from "../../../styles/Common ts.tsx";
import Typewriter from "typewriter-effect"

export const Main = () => {
    return (
        <StyledMain id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <BlockInfo>
                        <Text>Hi ,</Text>
                        <Text>My name is</Text>
                        <TextGradient>Cherepcovsky RV</TextGradient>
                        {/*<HeaderMain>A Web Developer</HeaderMain>*/}
                        {/*<HeaderMain>I build things for web</HeaderMain>*/}
                        <HeaderMain>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings:["A Web Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </HeaderMain>
                    </BlockInfo>

                    <PhotoWrap>
                        <PhotoBgVisualStyled rotate={"-105deg"}/>
                        <PhotoBgVisualStyled rotate={"-120deg"}/>
                        <PhotoBgVisualStyled rotate={"-135deg"}/>
                        <PhotoBgVisualStyled rotate={"-150deg"}/>
                        <PhotoBgVisualStyled rotate={"-165deg"}/>
                        <Photo src={photo}/>
                    </PhotoWrap>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    display: flex;
    background-color: ${theme.colors.lightModeBg};
    overflow: hidden;
`

const HeaderMain = styled.h1`
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightHeadersColor,
        weight: 700,
        FMax: 58,
        FMin: 38,
        spacing: "-0.02em"
    })}
    p {
        display: none;
    }
    
`


const BlockInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    ${font({family:"'Poppins', sans-serif", color:theme.colors.lightHeadersColor, weight:700, FMax:58, FMin:42, spacing:"-0.02em"})}
    
    @media screen and (max-width: 843px) {
    align-items: center;
}
`

const Text = styled.span`
`

const TextGradient = styled.span`    
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${font({family:"'Poppins', sans-serif", color:theme.colors.lightHeadersColor, weight:700, FMax:58, FMin:42, spacing:"-0.02em"})}
`

const Photo = styled.img`
    height: 350px;
    width: 350px;
    border-radius: 350px;
    object-fit: cover;
    background: linear-gradient(0deg, #13b0f5 2.6%, #e70faa 100%);
    padding: 5px;
    
    @media ${theme.media.mobile} {
        height: 260px;
        width: 260px;
    }
`

const PhotoWrap = styled.div`
    position: relative;
    margin-right:10px;
    padding: 35px 10px;
`