import { Visibility } from "@material-ui/icons"
import styled from "styled-components"

const WidgetCotainer = styled.div`
flex: 1;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
padding: 20px;
margin-right: 20px;
`

const WidgetSmallTitle = styled.span`
font-size: 22px;
font-weight: 600;
`
const WidgetSmallList = styled.ul`
margin: 0;
list-style: none;
padding: 0;
`
const WidgetSmallListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0 ;
`

const WidgetSmallImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50px;
object-fit: cover;
`

const WidgetSmallUser = styled.div`
display: flex;
flex-direction: column;
`

const WidgetSmallUsername = styled.span`
font-weight: 600;

`


const WidgetSmallJobTitle = styled.span`
font-weight: 300;
`


const WidgetSmallButton = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding:7px 10px ;
background: #ececf0;
color:#555 ;
cursor: pointer;
`

const WidgetSmall = () => {
    return (
        <WidgetCotainer>
            <WidgetSmallTitle>New Join Members</WidgetSmallTitle>
            <WidgetSmallList>
                <WidgetSmallListItem>
                        <WidgetSmallImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                        <WidgetSmallUser>
                            <WidgetSmallUsername>Dennis Ngari</WidgetSmallUsername>
                            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
                        </WidgetSmallUser>
                    <WidgetSmallButton>
                    <Visibility style={{fontSize:"16px", marginRight:"5px"}}/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>


                <WidgetSmallListItem>
                        <WidgetSmallImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                        <WidgetSmallUser>
                            <WidgetSmallUsername>Dennis Ngari</WidgetSmallUsername>
                            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
                        </WidgetSmallUser>
                    <WidgetSmallButton>
                    <Visibility style={{fontSize:"16px", marginRight:"5px"}}/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>

                <WidgetSmallListItem>
                        <WidgetSmallImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                        <WidgetSmallUser>
                            <WidgetSmallUsername>Dennis Ngari</WidgetSmallUsername>
                            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
                        </WidgetSmallUser>
                    <WidgetSmallButton>
                    <Visibility style={{fontSize:"16px", marginRight:"5px"}}/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>

                <WidgetSmallListItem>
                        <WidgetSmallImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                        <WidgetSmallUser>
                            <WidgetSmallUsername>Dennis Ngari</WidgetSmallUsername>
                            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
                        </WidgetSmallUser>
                    <WidgetSmallButton>
                    <Visibility style={{fontSize:"16px", marginRight:"5px"}}/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>

                <WidgetSmallListItem>
                        <WidgetSmallImage src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                        <WidgetSmallUser>
                            <WidgetSmallUsername>Dennis Ngari</WidgetSmallUsername>
                            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
                        </WidgetSmallUser>
                    <WidgetSmallButton>
                    <Visibility style={{fontSize:"16px", marginRight:"5px"}}/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>

            </WidgetSmallList>
        </WidgetCotainer>
    )
}

export default WidgetSmall
