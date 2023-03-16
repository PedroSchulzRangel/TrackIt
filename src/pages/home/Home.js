import logo from '../../assets/logo.png';
import { HomeContainer } from './StyleHome';
import { Link } from 'react-router-dom';

export default function Home(){
    return (<HomeContainer>
        <img src={logo} alt="logo-trackit"/>
        <form>
        <input data-test="email-input" type="email" placeholder="email"/>
        <br/>
        <input data-test="password-input" type="text" placeholder="senha"/>
        <br/>
        <button data-test="login-btn" type="submit">Entrar</button>
        </form>
        <Link to="/cadastro"><p data-test="signup-link">Não tem uma conta? Cadastre-se!</p></Link>
    </HomeContainer>);
}