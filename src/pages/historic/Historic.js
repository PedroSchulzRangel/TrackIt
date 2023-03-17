import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Title, Description, HistoricContainer} from './StyleHistoric';

export default function Historic(){
    return <HistoricContainer>
        <Header/>
        <Title>Histórico</Title>
        <Description>Em breve você poderá ver o histórico dos seus hábitos aqui!</Description>
        <Footer/>
   </HistoricContainer>;
}
