import logo from '../../assets/logo.png';
import { HomeContainer } from './StyleHome';
import { Link } from 'react-router-dom';

export default function Home(){
    return (<HomeContainer>
        <img src={logo} alt="logo-trackit"/>
        <form>
        <input type="email" placeholder="email"/>
        <br/>
        <input type="text" placeholder="senha"/>
        <br/>
        <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
    </HomeContainer>);
}