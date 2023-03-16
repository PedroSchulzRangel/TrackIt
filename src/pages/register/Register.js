import logo from '../../assets/logo.png';
import { RegisterContainer } from './StyleRegister';
import { Link } from 'react-router-dom';

export default function Register(){
    return (<RegisterContainer>
        <img src={logo} alt="logo-trackit"/>
        <form>
        <input data-test="email-input" type="email" placeholder="email"/>
        <br/>
        <input data-test="password-input" type="text" placeholder="senha"/>
        <br/>
        <input data-test="user-name-input" type="text" placeholder="nome"/>
        <br/>
        <input data-test="user-image-input" type="text" placeholder="foto"/>
        <br/>
        <button data-test="signup-btn" type="submit">Cadastrar</button>
        </form>
        <Link to="/"><p data-test="login-link">Já tem uma conta? Faça login!</p></Link>
    </RegisterContainer>);
}