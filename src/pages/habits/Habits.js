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

export default function Habits(){
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
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
        <Footer/>
    </HabitsContainer>
    </IconContext.Provider>);
}