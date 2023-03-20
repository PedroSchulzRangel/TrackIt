import { BiCheckSquare } from 'react-icons/bi';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import {ContextHabitsConcluded, Context} from '../Context';
import axios from 'axios';
import BASE_URL from '../url';

export default function TodayItem({id, name, done, current, highest, length}){

    const [itemConcluded, setItemConcluded] = useState(done);
    const [habitsConcluded, setHabitsConcluded] = useContext(ContextHabitsConcluded);
    const [loginResponse, setLoginResponse] = useContext(Context);

    const config = {
        headers: {
            "Authorization": `Bearer ${loginResponse.token}`
        }
    };

    function changeStatus(){
        const body={};
        const notStatus = !itemConcluded
        setItemConcluded(notStatus);
        if (notStatus === true){
            setHabitsConcluded(habitsConcluded + (1/length)*100);
            const promise = axios.post(`${BASE_URL}habits/${id}/check`, body, config);
            promise.then((res) => {
                console.log(res.data);
            });
            promise.catch((error) => {
                console.log(error.response.data);
                alert(error.response.data.message);
            });
        } else {
            setHabitsConcluded(habitsConcluded - (1/length)*100);
            const promise = axios.post(`${BASE_URL}habits/${id}/uncheck`, body, config);
            promise.then((res) => {
                console.log(res.data);
            });
            promise.catch((error) => {
                console.log(error.response.data);
                alert(error.response.data.message);
            });
        }
    }

    return <ItemContainer data-test="today-habit-container">
        <div>
            <h2 data-test="today-habit-name">{name}</h2>
            <p data-test="today-habit-sequence">Sequência atual: <SequenciaAtual itemConcluded={itemConcluded} current={current} highest={highest}>{current} dias</SequenciaAtual></p>
            <p data-test="today-habit-record">Seu recorde: {highest} dias</p>
        </div>
        <BiCheckSquare data-test="today-habit-check-btn"
        onClick={changeStatus}
        type="solid"
        color={itemConcluded? "#8fc549":"#ebebeb"}
        size="69px"
        border="square"/>
    </ItemContainer>;
}

const ItemContainer = styled.div`
    width: 340px;
    height: 94px;
    border-radius: 5px;
    background-color: #ffffff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    margin-left: 18px;
    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: #666666;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 12.98px;
        line-height: 16.22px;
        color: #666666;
    }
`;
const SequenciaAtual = styled.span`
    color: ${props => (props.itemConcluded ||
    ((props.current === props.highest) && props.current>0))? "green" : "#666666"};
`;