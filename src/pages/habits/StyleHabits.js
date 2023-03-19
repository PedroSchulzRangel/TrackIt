import styled from 'styled-components';

export const HabitsContainer = styled.div`
    background-color: #e5e5e5;
    height: 100vh;
`;

export const TitleContainer = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 17px;
    padding-right: 18px;
    padding-top: 28px;

    h3 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22.98px;
        line-height: 28.72px;
        color: #126ba5;
    }

`;
export const Message = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color: #666666;
    margin-top: 20px;
    padding-left: 17px;
`;
export const NewHabitContainer = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    margin-left: 17px;
    padding-left: 19px;
    padding-top: 18px;
    
    input {
        border: 1px solid #d4d4d4;
        width: 303px;
        height: 45px;
        border-radius: 5px;
    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: #dbdbdb;
    }
`;
export const weekdaysContainer = styled.div`

`;