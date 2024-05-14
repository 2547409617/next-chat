"use client";
import Left from "@/components/Left";
import Right from "@/components/Right";

export default function Home() {
  

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-[#edf2f7]" >
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
            <Left />
            <Right />
        </div>
        </div>
    </div>
  );
}
