import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TodayItem from '../../components/TodayItem';
import { TodayContainer, Title, SubTitle } from './StyleToday';
import { useState, useContext, useEffect} from 'react';
import {Context, ContextHabitsConcluded} from '../../Context';
import BASE_URL from '../../url';
import axios from 'axios';
import dayjs from 'dayjs';

export default function Today(){

    const [todayHabitList, setTodayHabitList] = useState([]);
    const [loginResponse, setLoginResponse] = useContext(Context);
    const [habitsConcluded, setHabitsConcluded] = useContext(ContextHabitsConcluded);

    const config = {
        headers: {
            "Authorization": `Bearer ${loginResponse.token}`
        }
    };

    useEffect(() => {
        const promise = axios.get(`${BASE_URL}habits/today`, config);
        promise.then((res) => {
            console.log(res.data);
            setTodayHabitList(res.data);
        });
        promise.catch((error) => {
            console.log(error.response.data);
            alert(error.response.data.message);
        });
    }, []);

    return <TodayContainer>
        <Header/>
        <Title data-test="today">Segunda, {dayjs().format('D')}/{dayjs().format('MM')}</Title>
        <SubTitle data-test="today-counter">{habitsConcluded === 0? "Nenhum hábito concluído ainda":`${habitsConcluded}% dos hábitos concluídos`}</SubTitle>
        {todayHabitList.length === 0? "": todayHabitList.map((hab, index) =>
        <TodayItem
        key={index}
        id={hab.id}
        name={hab.name}
        done={hab.done}
        current={hab.currentSequence}
        highest={hab.highestSequence}
        length={todayHabitList.length}/>)}
        <Footer/>
    </TodayContainer>;
}