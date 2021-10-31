import styled from "styled-components"
import Chart from "../components/Chart"
import FeaturedInfo from "../components/FeaturedInfo"
import WidgetLarge from "../components/WidgetLarge"
import WidgetSmall from "../components/WidgetSmall"
import { userData } from "../dummydata"


const HomeContainer = styled.div`
flex:6;

`
const HomeWidgets = styled.div`
display: flex;
margin: 20px;
`

const Home = () => {
    return (
        <HomeContainer>
            <FeaturedInfo/>
            <Chart data = {userData} title="User Analytics" dataKey = "Active User" grid/>
            <HomeWidgets>
                <WidgetSmall/>
                <WidgetLarge/>
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home
