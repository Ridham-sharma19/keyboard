import Image from "next/image";
import L1 from "./layers/l1";
import L2 from "./layers/l2";
import L3 from "./layers/l3";
import L4 from "./layers/l4";
import L5 from "./layers/l5";
import L6 from "./layers/l6";

export default function Home() {
  return (
   <div className="w-full h-[100vh] flex justify-center items-center bg-[#0E1013]">
    <div className="  flex flex-col gap-2 h-auto w-auto p-4 rounded-xl bg-[#26262A]">
  
        <L1></L1>
        <L2/>
        <L3></L3>
        <L4></L4>
        <L5/>
        <L6/>
       
    
      

    </div>

   </div>
  );
}
