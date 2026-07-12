"use client";


import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[
{
time:"8 AM",
rate:72
},
{
time:"9 AM",
rate:85
},
{
time:"10 AM",
rate:110
},
{
time:"11 AM",
rate:95
},
{
time:"12 PM",
rate:130
},
{
time:"1 PM",
rate:90
}
];



export default function FitnessChart(){


return(

<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<XAxis dataKey="time"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="rate"
strokeWidth={3}
/>


</LineChart>

</ResponsiveContainer>


)

}
