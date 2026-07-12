"use client";

import {HeartPulse} from "lucide-react";
import {useEffect,useState} from "react";


export default function HeartRateCard(){

const [rate,setRate]=useState(75);


useEffect(()=>{

 const interval=setInterval(()=>{

   setRate(
    Math.floor(
      Math.random()*40+70
    )
   );

 },2000);


 return ()=>clearInterval(interval);

},[]);



let zone="Normal";


if(rate>140)
 zone="High Intensity";

else if(rate>100)
 zone="Fat Burn";


return(

<div className="bg-red-600 rounded-xl p-6">

<div className="flex items-center gap-3">

<HeartPulse size={35}/>

<h2 className="text-xl">
Heart Rate
</h2>

</div>


<p className="text-5xl font-bold mt-5">

{rate}

<span className="text-xl">
 bpm
</span>

</p>


<p className="mt-4">
Zone:
<b>
 {zone}
</b>
</p>


</div>

)

}
