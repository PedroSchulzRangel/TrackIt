import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiFillPlusSquare } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { TitleContainer } from './StyleHabits';
import { Message } from './StyleHabits';

export default function Habits(){
    return (
    <IconContext.Provider value={{color: "#52B6FF", size: "50px"}}>
    <div>
        <Header/>
        <TitleContainer>
            <h3>Meus hábitos</h3>
            <AiFillPlusSquare/>
        </TitleContainer>
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
        <Footer/>
    </div>
    </IconContext.Provider>);
}