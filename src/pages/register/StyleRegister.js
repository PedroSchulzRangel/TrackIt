import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
img {
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
};
input {
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-bottom: 6px;
    color: #dbdbdb;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 19.98px;
    font-weight: 400;
    line-height: 24.97px;
};
input::placeholder{
    color: #dbdbdb;
};
button {
    margin-top: 6px;
    margin-bottom: 25px;
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    color: #FFFFFF;
    border-radius: 4.64px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20.98px;
    line-height: 26.22px;
    border: none;
};
p {
    color: #52b6ff;
    text-decoration: underline;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13.98px;
    line-height: 17.47px;
}
`;