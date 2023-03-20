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
        ResetSubmitButtonContainer,
        ButtonOfEachDay} from './StyleHabits';
import { useEffect, useState, useContext } from 'react';
import {Context} from '../../Context';
import axios from 'axios';
import BASE_URL from '../../url';
import Habit from '../../components/Habit';
import weekdays from '../../weekdays';
import { ThreeDots } from 'react-loader-spinner';

export default function Habits(){

const [loginResponse, setLoginResponse] = useContext(Context);
const [habitsList, setHabitsList] = useState([]);
const [habitsDeleted, sethabitsDeleted] = useState(0);
const [newHabit,setNewHabit] = useState(false);
const [habitName, setHabitName] = useState("");
const [days, setDays] = useState([]);
const [disabled, setDisabled] = useState(false);

console.log(days);

const config = {
    headers: {
        "Authorization": `Bearer ${loginResponse.token}`
    }
};

useEffect(() => {

    const promise = axios.get(`${BASE_URL}habits`,config);

    promise.then((res) => {
        console.log(res.data);
        setHabitsList(res.data);
    });
    promise.catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.message);
    });
},[habitsDeleted]);

function createNewHabit(event){
    event.preventDefault();
    setDisabled(true);

    const body = {
        name: habitName,
        days
    };
    const promise = axios.post(`${BASE_URL}habits`,body,config);
    promise.then((res) => {
        console.log(res.data);
        setHabitsList([...habitsList, res.data]);
        setHabitName("");
        setDays([]);
        setNewHabit(false);
        setDisabled(false);

    });
    promise.catch((error) => {
        console.log(error.response.data);
        setHabitName("");
        setDays([]);
        setNewHabit(false);
        setDisabled(false);
        alert(error.response.data.message);
    });
}

    return (
    <IconContext.Provider value={{color: "#52B6FF", size: "50px"}}>
    <HabitsContainer>
        <Header/>
        <TitleContainer>
            <h3>Meus hábitos</h3>
            <AiFillPlusSquare onClick={() => setNewHabit(true)} data-test="habit-create-btn"/>
        </TitleContainer>
        <NewHabitContainer newHab={newHabit} data-test="habit-create-container">
            <form onSubmit={createNewHabit}>
            <input
            value={habitName}
            onChange={e => setHabitName(e.target.value)}
            data-test="habit-name-input"
            type="text"
            placeholder="nome do hábito"
            required
            disabled={disabled}/>
            <br/>
            <WeekdaysContainer>
            {weekdays.map((d,i) =>
            <ButtonOfEachDay
            disabled={disabled}
            index={i}
            days={days}
            onClick={() => {

                const copyOfDays = [...days];

                if(!days.includes(i)){
                    setDays([...days, i])
                } else {
                    copyOfDays.splice(copyOfDays.indexOf(i),1);
                    setDays(copyOfDays);   
                }}}
                key={i}
                data-test="habit-day"
                type="button">{d}</ButtonOfEachDay>)}
            </WeekdaysContainer>
            <br/>
            <ResetSubmitButtonContainer>
            <ResetButton
            data-test="habit-create-cancel-btn"
            type="reset"
            disabled={disabled}
            onClick={() => setNewHabit(false)}>
                Cancelar
                </ResetButton>
            <SubmitButton
            data-test="habit-create-save-btn"
            type="submit"
            disabled={disabled}>
                {disabled? <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}/>
            :"Salvar"}</SubmitButton>
            </ResetSubmitButtonContainer>
            </form>
        </NewHabitContainer>
        {habitsList.length === 0 ?
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
        : habitsList.map((hab) =>
        <Habit
        key={hab.id}
        name={hab.name}
        days={hab.days}
        id={hab.id}
        deleted={habitsDeleted}
        setDeleted={sethabitsDeleted}/>)}
        <Footer/>
    </HabitsContainer>
    </IconContext.Provider>);
}