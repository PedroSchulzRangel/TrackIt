import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ContextHabitsConcluded} from '../Context';
import {useContext} from 'react';

export default function Footer(){

    const [habitsConcluded, setHabitsConcluded] = useContext(ContextHabitsConcluded);

    return (<FooterContainer data-test="menu">
        <Link to="/habitos" data-test="habit-link"><HabitAndHistoricLink>Hábitos</HabitAndHistoricLink></Link>
        <ProgressBarContainer>
            <CircularProgressbarWithChildren
            data-test="today-link"
            value={habitsConcluded}
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#52b6ff",
            textColor: "#ffffff",
            pathColor: "#ffffff",
            trailColor: "transparent" 
            })}>
            <Link to="/hoje"><LinkToday>Hoje</LinkToday></Link>
        </CircularProgressbarWithChildren>
    </ProgressBarContainer>
    <Link to="/historico" data-test="history-link"><HabitAndHistoricLink>Histórico</HabitAndHistoricLink></Link>
    </FooterContainer>);
}

const FooterContainer = styled.div`
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

`;
const HabitAndHistoricLink = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color: #52b6ff;
    `;
const ProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
`;
const LinkToday = styled.p`
    color: #ffffff;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
`;