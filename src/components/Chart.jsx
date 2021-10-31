import styled from "styled-components"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
margin: 20px;
padding: 20px;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
`

const ChartTitle = styled.h3`
margin-bottom: 20px;
`

export default function Chart({title, data, dataKey, grid}){

    return (
        <ChartContainer >
            <ChartTitle>
                {title}
            </ChartTitle>
            <ResponsiveContainer width="100%" aspect={4/1} >
                <LineChart data={data}> 
                <XAxis dataKey = "name" stroke="#5550bd" />
                <Line type="monotone" dataKey= {dataKey} stroke="#5550bd"/>
                <Tooltip/>
                { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}


