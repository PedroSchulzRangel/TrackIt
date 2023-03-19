import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiFillPlusSquare } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { TitleContainer,
        Message,
        HabitsContainer,
        WeekdaysContainer,
        NewHabitContainer,
        ResetButton,
        SubmitButton,
        ResetSubmitButtonContainer} from './StyleHabits';
import { useEffect, useState, useContext } from 'react';
import Context from '../../Context';
import axios from 'axios';
import BASE_URL from '../../url';
import Habit from '../../components/Habit';

export default function Habits(){

const [loginResponse, setLoginResponse] = useContext(Context);
const [habitsList, setHabitsList] = useState([]);

useEffect(() => {
    const config = {
        headers: {
            "Authorization": `Bearer ${loginResponse.token}`
        }
    };
    const promise = axios.get(`${BASE_URL}habits`,config);

    promise.then((res) => {
        console.log(res.data);
        setHabitsList(res.data);
    });
    promise.catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.message);
    });
},[]);

    return (
    <IconContext.Provider value={{color: "#52B6FF", size: "50px"}}>
    <HabitsContainer>
        <Header/>
        <TitleContainer>
            <h3>Meus hábitos</h3>
            <AiFillPlusSquare data-test="habit-create-btn"/>
        </TitleContainer>
        <NewHabitContainer data-test="habit-create-container">
            <form>
            <input data-test="habit-name-input" type="text" placeholder="nome do hábito" required/>
            <br/>
            <WeekdaysContainer>
            <button data-test="habit-day" type="button">D</button>
            <button data-test="habit-day" type="button">S</button>
            <button data-test="habit-day" type="button">T</button>
            <button data-test="habit-day" type="button">Q</button>
            <button data-test="habit-day" type="button">Q</button>
            <button data-test="habit-day" type="button">S</button>
            <button data-test="habit-day" type="button">S</button>
            </WeekdaysContainer>
            <br/>
            <ResetSubmitButtonContainer>
            <ResetButton data-test="habit-create-cancel-btn" type="reset">Cancelar</ResetButton>
            <SubmitButton data-test="habit-create-save-btn" type="submit">Salvar</SubmitButton>
            </ResetSubmitButtonContainer>
            </form>
        </NewHabitContainer>
        {habitsList.length === 0 ?
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
        : habitsList.map((hab) => <Habit name={hab.name} days={hab.days}/>)}
        <Footer/>
    </HabitsContainer>
    </IconContext.Provider>);
}