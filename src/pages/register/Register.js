import logo from '../../assets/logo.png';
import { RegisterContainer } from './StyleRegister';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import BASE_URL from '../../url';

export default function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function signUp(event){
        event.preventDefault();
        setDisabled(true);
        const body = {
            email,
            name,
            image,
            password
        };
        const promise = axios.post(`${BASE_URL}auth/sign-up`, body);
        promise.then((res) => {
            console.log(res.data);
            navigate("/");
            setEmail("");
            setPassword("");
            setName("");
            setImage("");
        });
        promise.catch((error) => {
            console.log(error.response.data);
            alert(error.response.data.message);
            setDisabled(false);
        });
    }
 
    return (<RegisterContainer>
        <img src={logo} alt="logo-trackit"/>
        <form onSubmit={signUp}>
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
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        data-test="user-name-input"
        type="text"
        placeholder="nome"
        required
        disabled={disabled}/>
        <br/>
        <input
        value={image}
        onChange={e => setImage(e.target.value)}
        data-test="user-image-input"
        type="text"
        placeholder="foto"
        required
        disabled={disabled}/>
        <br/>
        <button
        data-test="signup-btn"
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
            : "Entrar"}
            </button>
        </form>
        <Link to="/"><p data-test="login-link">Já tem uma conta? Faça login!</p></Link>
    </RegisterContainer>);
}