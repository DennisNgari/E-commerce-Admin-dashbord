import styled from "styled-components"

const WidgetCotainer = styled.div`
flex: 2;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
padding: 20px;
`
const WidgetLargeTitle = styled.h3`
font-size: 22px;
font-weight: 600;
`
const WidgetLargeTable = styled.table`
width: 100%;
border-spacing: 20px;
`

const WidgetLargeTr = styled.tr``

const WidgetLargeTh = styled.th`
text-align: left;
`

const WidgetLargeUser = styled.td`
display: flex;
align-items: center;
font-weight: 600;
`

const Image  = styled.img`
width: 40px;
height: 40px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;
`

const WidgetLargeUsername = styled.span``

const WidgetLargeDate = styled.td`
font-weight: 300;
`

const WidgetLargeAmount = styled.td`
font-weight: 300;

`

const WidgetLargeStatus = styled.td``


const WidgetLargeButton = styled.button`
padding: 5px 7px;
border: none;
border-radius: 10px;
background:${props=> props.type === "Approved" && "#a0f56f"};
color:${props=> props.type === "Approved" && "#000"};

background:${props=> props.type === "Pending" && "#faf36c"};
color:${props=> props.type === "Pending" && "#0B112D"};

background:${props=> props.type === "Declined" && "#e6544a"};
color:${props=> props.type === "Declined" && "#ffff"};

`

const WidgetLarge = () => {
    const Button = ({type})=>{
        return <WidgetLargeButton type={type}>{type}</WidgetLargeButton>
    }
    return (
        <WidgetCotainer>
            <WidgetLargeTitle>Latest Transactions</WidgetLargeTitle>
            <WidgetLargeTable>
                <WidgetLargeTr>
                    <WidgetLargeTh> Customer</WidgetLargeTh>
                    <WidgetLargeTh> Date</WidgetLargeTh>
                    <WidgetLargeTh> Amount</WidgetLargeTh>
                    <WidgetLargeTh> Status</WidgetLargeTh>
                </WidgetLargeTr>

                <WidgetLargeTr>
                    <WidgetLargeUser>
                       <Image src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg" />
                        <WidgetLargeUsername>Denrax</WidgetLargeUsername>
                    </WidgetLargeUser>

                    <WidgetLargeDate>2 June 2021</WidgetLargeDate>
                    <WidgetLargeAmount>$122.00</WidgetLargeAmount>
                    <WidgetLargeStatus>
                        <Button type="Approved"/>
                    </WidgetLargeStatus>
                </WidgetLargeTr>

                <WidgetLargeTr>
                    <WidgetLargeUser>
                       <Image src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg" />
                        <WidgetLargeUsername>Denrax</WidgetLargeUsername>
                    </WidgetLargeUser>
                    <WidgetLargeDate>2 June 2021</WidgetLargeDate>
                    <WidgetLargeAmount>$122.00</WidgetLargeAmount>
                    <WidgetLargeStatus>
                        <Button type="Pending"/>
                    </WidgetLargeStatus>
                </WidgetLargeTr>

                <WidgetLargeTr>
                    <WidgetLargeUser>
                       <Image src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg" />
                        <WidgetLargeUsername>Denrax</WidgetLargeUsername>
                    </WidgetLargeUser>
                    <WidgetLargeDate>2 June 2021</WidgetLargeDate>
                    <WidgetLargeAmount>$122.00</WidgetLargeAmount>
                    <WidgetLargeStatus>
                        <Button type="Declined"/>
                    </WidgetLargeStatus>
                </WidgetLargeTr>

                <WidgetLargeTr>
                    <WidgetLargeUser>
                       <Image src="https://pbs.twimg.com/profile_images/1417875257269100547/lf0WtCyN_400x400.jpg" />
                        <WidgetLargeUsername>Denrax</WidgetLargeUsername>
                    </WidgetLargeUser>
                    <WidgetLargeDate>2 June 2021</WidgetLargeDate>
                    <WidgetLargeAmount>$122.00</WidgetLargeAmount>
                    <WidgetLargeStatus>
                        <Button type="Pending"/>
                    </WidgetLargeStatus>
                </WidgetLargeTr>
                
            </WidgetLargeTable>
        </WidgetCotainer>
    )
}

export default WidgetLarge
