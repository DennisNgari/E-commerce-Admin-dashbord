import styled from "styled-components"

const UserContainer = styled.div`
flex: 6;
padding: 20px;
`

const UserTitleContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
    
const UserTitle = styled.h1``

const UserAddButton = styled.button`
width: 80px;
border: none;
padding: 5px;
background: teal;
border-radius: teal;
color: #ffff;
cursor: pointer;
font-size: 16px; 
`

const UserContainerWrapper = styled.div`
display: flex;

`
const UserShow = styled.div`
flex:1;
`
const UserUpdate = styled.div``

const User = () => {
    return (
        <UserContainer>
            <UserTitleContainer>
                <UserTitle> Edit User</UserTitle>
                <UserAddButton >Create</UserAddButton>
            </UserTitleContainer>

            <UserContainerWrapper>
                <UserShow></UserShow>
                <UserUpdate></UserUpdate>
            </UserContainerWrapper>
        </UserContainer>
    )
}

export default User
