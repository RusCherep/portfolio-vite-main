import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {font} from "../../../styles/Common ts.tsx";


export const Contacts = () => {
    return (
        <StyledContacts id={"contact"}>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <SectionTitle>
                        For any questions please mail me:
                    </SectionTitle>
                    <StyledMail>
                        ruslik.cherep@gmail.com
                    </StyledMail>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    display: flex;
    justify-content: center;
    
`


const StyledMail = styled.span`
    ${font({
        family: "'DM Sans', sans-serif",
        weight: 700,
        FMax: 48,
        FMin: 26,
        lineHeight: 1.2069,
        spacing: "-0.02em"
    })}
    
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    margin-top: 10px;
`
