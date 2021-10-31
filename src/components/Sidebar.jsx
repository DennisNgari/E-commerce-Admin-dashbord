import { AssessmentOutlined, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, ReportOutlined, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons"
import styled from "styled-components"

const SidebarContainer = styled.div`
flex: 1;
height: calc(100vh - 50px );
position: sticky;
top: 50px;
background: #e9e9ec;
`
const SidebarWrapper = styled.div`
padding: 20px;
color: #555;
`

const SidebarMenu = styled.div`
margin-bottom: 50px;
`
const SidebarTitle = styled.h3`
font-size: 13px;
color: #7c7a7a;
`
const SidebarList = styled.ul`
list-style: none;
padding: 5px;

`
const SidebarListItem = styled.li`
padding: 5px;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 10px;

&.active, &:hover{
    background: #d2d2d4;
}
`

const Sidebar = () => {
  
    return (
        <SidebarContainer>
            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList >
                        <SidebarListItem className="active">
                            <LineStyle style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Home
                        </SidebarListItem>
                        <SidebarListItem >
                            <Timeline style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem >
                            <TrendingUp style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>

                <SidebarMenu>
                    <SidebarTitle>QuickMenu</SidebarTitle>
                    <SidebarList >
                    <SidebarListItem>
                            <PermIdentity style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Users
                        </SidebarListItem>
                        <SidebarListItem >
                            <Storefront style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Products
                        </SidebarListItem>
                        <SidebarListItem >
                            <TrendingUp style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Sales
                        </SidebarListItem>
                        <SidebarListItem >
                            <AssessmentOutlined style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>

                <SidebarMenu>
                    <SidebarTitle>Notifications</SidebarTitle>
                    <SidebarList >
                    <SidebarListItem>
                            <MailOutline style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Mail
                        </SidebarListItem>
                        <SidebarListItem >
                            <DynamicFeed style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem >
                            <ChatBubbleOutline style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>

                <SidebarMenu>
                    <SidebarTitle>Staff</SidebarTitle>
                    <SidebarList >
                        <SidebarListItem>
                            <WorkOutline style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Manage
                        </SidebarListItem>
                        <SidebarListItem >
                            <Timeline style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem >
                            <ReportOutlined style={{marginRight:"5px", fontSize:"20px"}}/> 
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>

                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
