import { Language, NotificationsNone, Settings} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const TopbarContainer = styled.div`
width: 100%;
height: 50px;
background: #ffff;
position: sticky;
top: 0;
z-index: 999;
`
const TopbarWrapper = styled.div`
height: 100%;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`

const TopbarLeft = styled.div``

const TopbarRight = styled.div`
display: flex;
align-items: center;
`

const Logo = styled.span`
font-weight: bold;
font-size: 30px;
color: #04047a;
`

const TopbarIconContainer = styled.div`
position: relative;
cursor: pointer;
margin-right: 10px;
color: #555;
`

const TopIconBadge = styled.span`
position: absolute;
width: 15px;
height: 15px;
top: -5px;
right: 0px;
background: red;
color: #ffff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
`

const TopAvator = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
`

const Topbar = () => {
    return (
        <TopbarContainer>
            <TopbarWrapper>
                <TopbarLeft>
                  <Logo>SHOPRITE ADMIN</Logo>  
                </TopbarLeft>
                <TopbarRight>
                    <TopbarIconContainer>
                        <NotificationsNone/>
                        <TopIconBadge>2</TopIconBadge>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        <Language/>
                        <TopIconBadge>2</TopIconBadge>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        <Settings/>
                    </TopbarIconContainer>
                    <TopAvator src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg"/>
                </TopbarRight>
            </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Topbar
