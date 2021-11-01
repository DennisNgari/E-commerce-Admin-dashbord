import styled from "styled-components"

const NewuserContainer = styled.div`
flex: 6;
padding:10px;
`
const NewUserTitle = styled.h1``

const NewUserForm = styled.form``

const NewUserInfo = styled.div`
display: flex;
flex-wrap: wrap;
`

const NewUserItem = styled.div`
width: 400px;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 20px;
`

const NewUserLabel  = styled.label`
margin-bottom: 10px;
font-size: 14px;
font-weight: 600;
color: #adacac;
`

const NewUserInput = styled.input`
height: 20px;
padding: 10px;
border: 1px solid gray;
border-radius: 5px;
&:focus{
    outline: none;
    border-color: rgb(173, 173, 236);
    box-shadow: 0 0 10px #719ECE;
}
`

const NewUserGender = styled.div``

const NewUserGenderInput = styled.input`
margin-top: 15px;
transform: scale(1.2); 
cursor: pointer;

`
const NewUserGenderLabel = styled.label`
margin: 10px;
font-size: 18px;
color:#555;
`

const NewUserSelect = styled.select`
height: 40px;
border-radius: 5px;
background: #E9E9EC;
&:focus{
    outline: none !important;
    border-color: rgb(173, 173, 236);
    box-shadow: 0 0 10px #719ECE;
}
`

const NewUserOption = styled.option``

const NewUserButton = styled.button`
align-self: flex-end;
width: 200px;
border: none;
background: darkblue;
color: #fff;
padding: 7px 10px;
border-radius: 10px;
font-weight: 600;
margin-top: 30px;
cursor: pointer;
letter-spacing: 2px;
font-size: 14px;
`

    

const NewUser = () => {
    return (
        <NewuserContainer>
            <NewUserTitle>New User</NewUserTitle>
            <NewUserForm>
                <NewUserInfo>
                <NewUserItem>
                    <NewUserLabel>User Name</NewUserLabel>
                    <NewUserInput type="text" placeholder="Enter User Name"/>
                </NewUserItem>

                <NewUserItem>
                    <NewUserLabel>Full Name</NewUserLabel>
                    <NewUserInput type="text" placeholder="Enter Full Name"/>
                </NewUserItem>

                <NewUserItem>
                    <NewUserLabel>Password</NewUserLabel>
                    <NewUserInput type="password" placeholder="Enter Password"/>
                </NewUserItem>

                <NewUserItem>
                    <NewUserLabel>Phone</NewUserLabel>
                    <NewUserInput type="text" placeholder="Enter Phone Number"/>
                </NewUserItem>

                <NewUserItem>
                    <NewUserLabel>Address</NewUserLabel>
                    <NewUserInput type="text" placeholder="Enter Address"/>
                </NewUserItem>

                <NewUserItem>
                    <NewUserLabel>Gender</NewUserLabel>
                        <NewUserGender>
                                <NewUserGenderInput type="radio" name="gender" id="male" value="Male"/>
                                <NewUserGenderLabel htmlFor="male">Male</NewUserGenderLabel>

                                <NewUserGenderInput type="radio" name="gender" id="female" value="Female"/>
                                <NewUserGenderLabel htmlFor="female">Female</NewUserGenderLabel>

                                <NewUserGenderInput type="radio" name="gender" id="other" value="Other"/>
                                <NewUserGenderLabel htmlFor="other">Other</NewUserGenderLabel>
                        </NewUserGender>

                </NewUserItem>

                <NewUserItem>
                    <NewUserLabel>Active</NewUserLabel>
                    <NewUserSelect name="active" id="active">
                        <NewUserOption value = "yes">Yes</NewUserOption>
                        <NewUserOption value="no">No</NewUserOption>
                    </NewUserSelect>
                </NewUserItem>
            </NewUserInfo>

                <NewUserButton>CREATE</NewUserButton>
            </NewUserForm>
            
        </NewuserContainer>
    )
}

export default NewUser
