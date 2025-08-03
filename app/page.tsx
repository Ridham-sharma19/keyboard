import Image from "next/image";
import L1 from "./layers/l1";
import L2 from "./layers/l2";
import L3 from "./layers/l3";
import L4 from "./layers/l4";
import L5 from "./layers/l5";
import L6 from "./layers/l6";

export default function Home() {
  return (
  <div className="min-h-screen w-screen h-screen p-8 sm:p-0 overflow-hidden flex justify-center items-center bg-[#0E1013]">
            <div className="transform rotate-90 py-5 sm:rotate-0 origin-center flex flex-col gap-2 h-auto w-auto sm:p-4 rounded-xl bg-[#26262A]">
                <L1 />
                <L2 />
                <L3 />
                <L4 />
                <L5 />
                <L6 />
            </div>
        </div>
  );
}
