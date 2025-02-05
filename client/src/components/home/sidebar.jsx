import React from 'react';
import {GrNotes} from "react-icons/gr";
import {AiFillHome} from "react-icons/ai";
import {FaStar} from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <section className={'w-1/4 h-full p-3'}>
      <div className="w-full h-full rounded-3xl border-2 border-[#f2f2f2] p-3 flex flex-col justify-between px-5">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2 py-2 border-b-2 border-[#f2f2f2]">
            <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center">
              <GrNotes color={'white'}/>
            </div>
            <h1 className="font-semibold text-lg">AI Notes</h1>
          </div>
          <div className="flex flex-row items-center w-full bg-[#f4eaff] gap-2 mt-5 mb-3 px-3 py-2 rounded-3xl">
            <AiFillHome color={'#6d33aa'} size={27}/>
            <h1 className="font-semibold text-[#6d33aa] text-lg">AI Notes</h1>
          </div>
          <div className="flex flex-row items-center gap-2 px-3 py-2 rounded-3xl ">
            <FaStar color={'#c7c7c7'} size={27}/>
            <h1 className="font-semibold text-[#c7c7c7] text-lg">Favourites</h1>
          </div>
        </div>


        <div className="flex flex-row justify-between items-center">
          <div className={'flex flex-row gap-2 items-center font-semibold'}>
            <span
              className="flex justify-center items-center w-10 h-10 bg-black rounded-full text-lg text-neutral-100 font-semibold">K</span>
            Krish Agrawal
          </div>
          <FaChevronDown color={'#b8b8b8'} size={12}/>

        </div>
      </div>
    </section>
  );
};

export default Sidebar;
