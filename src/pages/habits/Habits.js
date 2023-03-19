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
        <NewHabitContainer>
            <form>
            <input type="text" placeholder="nome do hábito" required/>
            <br/>
            <WeekdaysContainer>
            <button type="button">D</button>
            <button type="button">S</button>
            <button type="button">T</button>
            <button type="button">Q</button>
            <button type="button">Q</button>
            <button type="button">S</button>
            <button type="button">S</button>
            </WeekdaysContainer>
            <br/>
            <ResetSubmitButtonContainer>
            <ResetButton type="reset">Cancelar</ResetButton>
            <SubmitButton type="submit">Salvar</SubmitButton>
            </ResetSubmitButtonContainer>
            </form>
        </NewHabitContainer>
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
        <Footer/>
    </HabitsContainer>
    </IconContext.Provider>);
}