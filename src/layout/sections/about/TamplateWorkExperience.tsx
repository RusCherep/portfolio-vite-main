import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {IconWithText} from "../../../components/menu/IconWithText.tsx";


type TemplateWorkExperiencePropsType = {
    contentPost: string
    workSchedule: string
    nameCompany: string
    location: string
    workTime: string

}

export const TemplateWorkExperience = (props: TemplateWorkExperiencePropsType) => {
    return (
        <StyledTemplateWorkExperience>
            <WorkExperienceLine>
                <ContentPost>{props.contentPost}</ContentPost>
                <WorkSchedule>{props.workSchedule}</WorkSchedule>
            </WorkExperienceLine>

            <FlexWrapper justify={"space-between"}>
                <WorkExperienceWrap>
                    <IconWithText iconId={"VectorOffice"} text={props.nameCompany} iconHeight={"12"} iconWidth={"12"}
                                  iconViewBox={"0 0 12 12"} />

                    <IconWithText iconId={"VectorLocation"} text={props.location} iconHeight={"12"} iconWidth={"12"}
                                  iconViewBox={"0 0 12 12"} />
                </WorkExperienceWrap>

                <IconWithText iconId={"VectorDate"} text={props.workTime} iconHeight={"12"} iconWidth={"12"}
                              iconViewBox={"0 0 14 14"} />

            </FlexWrapper>
        </StyledTemplateWorkExperience>
    )
        ;
};
const StyledTemplateWorkExperience = styled.div`
    padding: 30px 0;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.lightLineColor};
        position: absolute;
        left: 5px;
        right: 5px;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;

        ${FlexWrapper} {
            flex-direction: column;
        }
    }

`

const WorkExperienceLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`

const WorkExperienceWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;

    @media ${theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`


const ContentPost = styled.h4`
    display: flex;
    font: 400 20px / 1.4 "Poppins", sans-serif;
    letter-spacing: 0.05em;
    color: ${theme.colors.lightContentTextPrimary};

    flex-wrap: wrap;
`
const WorkSchedule = styled.span`
    font: 600 9px / 2.88889 "Poppins", sans-serif;
    text-align: center;
    color: ${theme.colors.workScheduleTextColor};
    border-radius: 100px;
    min-width: 84px;
    min-height: 24px;
    background-color: ${theme.colors.workScheduleBGC};
`




