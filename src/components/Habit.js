import weekdays from '../weekdays';
import {AiOutlineDelete} from 'react-icons/ai';
import styled from 'styled-components';
import {useState, useContext} from 'react';
import Context from '../Context';
import axios from 'axios';
import BASE_URL from '../url';


export default function Habit({name, days, id, deleted, setDeleted}){

    const [confirmScreen, setConfirmScreen] = useState(false);
    const [loginResponse, setLoginResponse] = useContext(Context);

    function deleteRequest(){
        setConfirmScreen(false);
        const config = {
            headers:{
                "Authorization": `Bearer ${loginResponse.token}`
            }
        };
        const promise = axios.delete(`${BASE_URL}habits/${id}`, config);
        promise.then((res) => {
            console.log(res.data);
            setDeleted(deleted + 1);
        });
        promise.catch((error) => {
           console.log(error.response.data);
           alert(error.response.data.message); 
        });
    }

    return (<>
    <HabitContainer confirm={confirmScreen}>
        <TitleContainer>
            <h3>{name}</h3>
            <AiOutlineDelete onClick={() => setConfirmScreen(true)}/>
        </TitleContainer>
        <WeekdaysButtonsContainer>
            {weekdays.map((d,i) => <ButtonOfEachDay index={i} selectedDays={days}>{d}</ButtonOfEachDay>)}
        </WeekdaysButtonsContainer>
    </HabitContainer>
    <ConfirmContainer confirm={confirmScreen}>
        <p>Deseja realmente apagar este hábito?</p>
        <button type="button" onClick={() => setConfirmScreen(false)}>Não</button>
        <button type="button" onClick={deleteRequest}>Sim</button>
    </ConfirmContainer>
    </>);
}

const HabitContainer = styled.div`
    display: ${props => props.confirm? "none":""};
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
const ConfirmContainer = styled.div`
    display: ${props => props.confirm? "":"none"};
    text-align: center;
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