import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiFillPlusSquare } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { TitleContainer } from './StyleHabits';
import { Message } from './StyleHabits';
import { HabitsContainer } from './StyleHabits';
import { weekdaysContainer } from './StyleHabits';
import { NewHabitContainer } from './StyleHabits';

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
            <weekdaysContainer>
            <button type="button">D</button>
            <button type="button">S</button>
            <button type="button">T</button>
            <button type="button">Q</button>
            <button type="button">Q</button>
            <button type="button">S</button>
            <button type="button">S</button>
            </weekdaysContainer>
            <br/>
            <button type="reset">Cancelar</button>
            <button type="submit">Salvar</button>
            </form>
        </NewHabitContainer>
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
        <Footer/>
    </HabitsContainer>
    </IconContext.Provider>);
}