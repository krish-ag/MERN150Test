import React from 'react';
import Sidebar from "./sidebar.jsx";
import {FaSort} from "react-icons/fa6";
import {FaPlay} from "react-icons/fa6";

function Search() {
  return <div className="flex flex-row gap-2 justify-between">
    <div className="w-15/16">
      <input type="text" placeholder={'Search'} className="w-full h-10 border-2 border-[#f2f2f2] rounded-3xl p-3"/>
    </div>
    <div
      className="w-1/16 border flex flex-row justify-center items-center border-2 border-[#f2f2f2] rounded-3xl gap-2 px-2">
      <FaSort size={16}/>
      <span>Sort</span>
    </div>
  </div>;
}


function Card() {
  return  <div className="w-full h-54 border-2  border-[#f2f2f2] p-3 rounded-3xl p-3">
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-semibold text-[#d5d5d5] text-sm">{new Date().toDateString()}</h1>
      <span
        className="bg-gray-200 rounded-xl px-2 flex flex-row items-center gap-1 text-sm font-semibold"><FaPlay/> 00:09</span>
    </div>
    <h1 className="font-semibold text-lg mt-3">Engineering Assignment Audio</h1>
    <p className="font-normal mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
      provident. </p>
  </div>;
}

const Home = () => {
  return (
    <div className={'flex flex-row h-dvh'}>
      <Sidebar/>
      <section className={'w-3/4 p-3 h-full'}>
        <Search/>
        <section className={'grid grid-cols-3 gap-3 mt-3'}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
      </section>
    </div>
  );
};

export default Home;
