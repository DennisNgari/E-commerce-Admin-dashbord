import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
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
margin-top: 20px;
`
const UserShow = styled.div`
flex:1;
padding: 20px;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
`
const UserUpdate = styled.div`
flex:2;
padding: 20px;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
margin-left: 20px;
`

const UserShowTop = styled.div`
display: flex;
align-items: center;
`

const UserImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`

const UserShowTopTitle = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`

const UserShowUserName = styled.span`
font-weight: 600;

`

const UserShowUserTitle = styled.span`
font-weight: 300;
`
const UserShowBottom = styled.div`
margin-top: 20px;
`
    
const UserShowTitle = styled.span`
font-size: 14px;
font-weight: 600;
color:#8b8989;
`

const UserShowInfoTitle =  styled.span`
margin-left: 10px;
`

const UserShowInfo = styled.div`
display: flex;
align-items: center;
margin: 20px 0;
color: #444;
`
const UserUpdateTitle = styled.span`
font-size: 24px;
font-weight: 600;
`

const UserUpdateForm = styled.form`
display: flex;
justify-content: space-between;
margin-top: 20px;

`

const UserUpdateLeft = styled.div``

const UserUpdateRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
 
const UserUpdateItem = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;

`

const UsernameLabel = styled.label`
margin-bottom: 5px;
font-size: 14px;
`

const UserUpdateInput = styled.input`
border: none;
width: 250px;
border-bottom: 1px solid gray;
height: 25px;
&:focus{
    outline: none;
}
`

const UserUpdateUpload = styled.div`
display: flex;
align-items: center;


`

const UserUpdateImage = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`

const LabelUpdateInputFile = styled.label``

const UpdateInputFile = styled.input``

const UserUpdateButton = styled.button`
border-radius: 5px;
border: none;
padding: 5px;
cursor: pointer;
background:darkblue;
color:#ffff;
font-weight: 600;
`



const User = () => {
    return (
        <UserContainer>
            <UserTitleContainer>
                <UserTitle> Edit User</UserTitle>
                <Link to = "/newuser">
                <UserAddButton >Create</UserAddButton>
                </Link>
            </UserTitleContainer>

            <UserContainerWrapper>
                <UserShow>
                    <UserShowTop>
                        <UserImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                        <UserShowTopTitle>
                            <UserShowUserName> Dennis Ngari </UserShowUserName>
                            <UserShowUserTitle> Software Engineer</UserShowUserTitle>
                        </UserShowTopTitle>
                    </UserShowTop>

                    <UserShowBottom>
                        <UserShowTitle>Account Details</UserShowTitle>
                        <UserShowInfo>
                            <PermIdentity style={{fontSize:"16px"}}/>
                            <UserShowInfoTitle>denrax</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowInfo>
                            <CalendarToday style={{fontSize:"16px"}}/>
                            <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowTitle>Contact Details</UserShowTitle>
                        <UserShowInfo>
                            <PhoneAndroid style={{fontSize:"16px"}}/>
                            <UserShowInfoTitle>+254 6573 673</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowInfo>
                            <MailOutline style={{fontSize:"16px"}}/>
                            <UserShowInfoTitle>denraxb@gmail.com</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowInfo>
                            <LocationSearching style={{fontSize:"16px"}}/>
                            <UserShowInfoTitle>NEW YORK | USA</UserShowInfoTitle>
                        </UserShowInfo>
                        
                        
                    </UserShowBottom>
                </UserShow>
                <UserUpdate>
                    <UserUpdateTitle>Edit</UserUpdateTitle>
                    <UserUpdateForm >
                        <UserUpdateLeft>
                            <UserUpdateItem>
                                <UsernameLabel>Username</UsernameLabel>
                                <UserUpdateInput type = "text" placeholder="denrax"/>
                            </UserUpdateItem>

                            <UserUpdateItem>
                                <UsernameLabel>Full Name</UsernameLabel>
                                <UserUpdateInput type = "text" placeholder="Dennis Ngari"/>
                            </UserUpdateItem>

                            <UserUpdateItem>
                                <UsernameLabel>Email</UsernameLabel>
                                <UserUpdateInput type = "text" placeholder="denraxb@gmail.com"/>
                            </UserUpdateItem>

                            <UserUpdateItem>
                                <UsernameLabel>Phone</UsernameLabel>
                                <UserUpdateInput type = "text" placeholder="+254 6573 673"/>
                            </UserUpdateItem>

                            <UserUpdateItem>
                                <UsernameLabel>Address</UsernameLabel>
                                <UserUpdateInput type = "text" placeholder="NEW YORK | USA"/>
                            </UserUpdateItem>
                        </UserUpdateLeft>

                        <UserUpdateRight>
                            <UserUpdateUpload>
                                <UserUpdateImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg" alt=""/>
                                <LabelUpdateInputFile htmlFor="file"> <Publish style={{ cursor: "pointer"}}/></LabelUpdateInputFile>
                                <UpdateInputFile type="file" id= "file" style={{display:"none"}}/>
                            </UserUpdateUpload>

                            <UserUpdateButton>Update</UserUpdateButton>
                        </UserUpdateRight>
                    </UserUpdateForm>
                </UserUpdate>
            </UserContainerWrapper>
        </UserContainer>
    )
}

export default User
