import logo from '../../assets/logo.png';
import { HomeContainer } from './StyleHome';
import { Link } from 'react-router-dom';
import BASE_URL from '../../url';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";

export default function Home(){

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [disabled,setDisabled] = useState(false);
const navigate = useNavigate();

function sendUserLoginInfo(event){
    
    event.preventDefault();
    
    setDisabled(true);

    const body = {
        email,
        password
    };
    const promise = axios.post(`${BASE_URL}auth/login`,body);
    promise.then((res) => {
        console.log(res.data);
        navigate("/hoje");
        setEmail("");
        setPassword("");
    });
    promise.catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.message);
        setDisabled(false);
    });

}

    return (<HomeContainer>
        <img src={logo} alt="logo-trackit"/>
        <form onSubmit={sendUserLoginInfo}>
        <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-test="email-input"
        type="email"
        placeholder="email"
        required
        disabled={disabled}/>
        <br/>
        <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        data-test="password-input"
        type="password"
        placeholder="senha"
        required
        disabled={disabled}/>
        <br/>
        <button
        data-test="login-btn"
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
            : "Entrar"}</button>
        </form>
        <Link to="/cadastro"><p data-test="signup-link">Não tem uma conta? Cadastre-se!</p></Link>
    </HomeContainer>);
}