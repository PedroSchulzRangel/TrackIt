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
    display: none;
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    margin-left: 17px;
    padding-left: 19px;
    padding-top: 18px;
    position: relative;
    
    input {
        border: 1px solid #d4d4d4;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        padding-left: 11px;
    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: #dbdbdb;
    }
`;
export const WeekdaysContainer = styled.div`
    margin-top: 8px;

    button{
        margin-right: 4px;
        background-color: #ffffff;
        border: 1px solid #d4d4d4;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: #dbdbdb; 
    }
`;

export const ResetSubmitButtonContainer = styled.div`
   position: absolute;
   bottom: 15px;
   right: 16px;
   
`;
export const ResetButton = styled.button`
    margin-right: 23px;
    width: 69px;
    height: 20px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 15.98px;
    line-height: 19.97px;
    background-color: #ffffff;
    border: none;
    color: #52b6ff;
`;
export const SubmitButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    color: #ffffff;
    border-radius: 4.64px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 15.98px;
    line-height: 19.97px;
    border: none;
`;