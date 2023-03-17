import styled from 'styled-components';
import trackit from '../assets/TrackIt.png';
import userImage from '../assets/user-image.png';

export default function Header(){
    return (<HeaderContainer data-test="header">
        <img src={trackit} alt="trackit-name"/>
        <UserImage src={userImage} alt="Profile-picture"/>
    </HeaderContainer>);
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    background-color: #126ba5;
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
`;

const UserImage = styled.img`
width: 51px;
height: 51px;
`;