import weekdays from '../weekdays';
import {AiOutlineDelete} from 'react-icons/ai';
import styled from 'styled-components';

export default function Habit({name, days}){
    return <HabitContainer>
        <TitleContainer>
            <h3>{name}</h3>
            <AiOutlineDelete/>
        </TitleContainer>
        <WeekdaysButtonsContainer>
        {weekdays.map((d,i) => <ButtonOfEachDay index={i} selectedDays={days}>{d}</ButtonOfEachDay>)}
        </WeekdaysButtonsContainer>
    </HabitContainer>;
}

const HabitContainer = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background-color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-top: 13px;
    padding-left: 15px;
    padding-right: 11px;
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const WeekdaysButtonsContainer = styled.div`
    display: flex;
`;
const ButtonOfEachDay = styled.button`
        background-color: ${props => {
            if(props.selectedDays.includes(props.index)){
                return "#cfcfcf";
            }
            else{
                return "#ffffff";
            }
        }};   
        color: ${props => {
            if(props.selectedDays.includes(props.index)){
                return "#ffffff";
            }
            else{
                return "#dbdbdb";
            }
        }}; 
        border: 1px solid ${props => {
            if(props.selectedDays.includes(props.index)){
                return "#cfcfcf";
            }
            else{
                return "#d4d4d4";
            }
        }};
        margin-right: 4px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
`;