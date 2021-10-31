import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import styled from "styled-components"

const FeaturedContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const FeaturedItem = styled.div`
flex: 1;
margin: 0px 20px;
padding: 20px;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
`

const FeaturedTitle = styled.h3`
font-size: 20px;

`

const FeaturedMoneyContainer = styled.div`
margin: 10px 0px ;
display: flex;
align-items: center;
`

const FeaturedMoney = styled.span`
font-size: 30px;
font-weight: 600;

`
const FeaturedMoneyRate = styled.span`
display: flex;
align-items: center;
margin-left: 20px;
`

const FeaturedSub = styled.span`
font-size: 15px;
color: #6d6b6b;
`



const FeaturedInfo = () => {
    return (
        <FeaturedContainer>
            <FeaturedItem>
                <FeaturedTitle> REVENUE</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$ 2,415</FeaturedMoney>
                    <FeaturedMoneyRate>-11.4 <ArrowDownward style={{ fontSize:"14px", marginLeft:"5px", color:"red"}}/> </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared To last Month</FeaturedSub>
            </FeaturedItem>

            <FeaturedItem>
                <FeaturedTitle> COST</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$ 4,415</FeaturedMoney>
                    <FeaturedMoneyRate>-1.4 <ArrowDownward style={{ fontSize:"14px",marginLeft:"5px", color:"red"}}/> </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared To last Month</FeaturedSub>
            </FeaturedItem>

            <FeaturedItem>
                <FeaturedTitle> COST</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$ 2,215</FeaturedMoney>
                    <FeaturedMoneyRate>+2.4 <ArrowUpward style={{ fontSize:"14px", marginLeft:"5px", color:"green"}}/> </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared To last Month</FeaturedSub>
            </FeaturedItem>
            
        </FeaturedContainer>
    )
}

export default FeaturedInfo
