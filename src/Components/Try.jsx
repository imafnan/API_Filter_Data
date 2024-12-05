import { useState } from "react";
import AllData from "../Data";

const Try = () => {

  const [OneDtat , TwoData] =useState(AllData)


  const handelItem = (itemData) =>{
    console.log(itemData)

      const filterData =AllData.filter((item)=>{
        return item.category == itemData
      })
      TwoData(filterData)
  }

  return (
    <div className="main-wrapper bg-gray-300 py-10">
      
      {/*-*-*-*-*-*-* Button Part Start -*-*-*-*-*-**/}
      <div className="header-section flex justify-center mb-8">
          <div className="filter-buttons flex gap-4 bg-white shadow-md py-3 px-5 rounded-lg">
            <button onClick={()=>TwoData(AllData)} className="rounded-full border border-gray-300 bg-gray-200 active:bg-green-600 active:text-white text-gray-700 transition duration-[.2s] px-6 py-2 text-sm font-bold">All</button>
            <button onClick={()=>handelItem('Waffle')} className="rounded-full border border-gray-300 bg-gray-200 active:bg-green-600 active:text-white text-gray-700 transition duration-[.2s] px-6 py-2 text-sm font-bold">Waffle</button>
            <button onClick={()=>handelItem('Cake')} className="rounded-full border border-gray-300 bg-gray-200 active:bg-green-600 active:text-white text-gray-700 transition duration-[.2s] px-6 py-2 text-sm font-bold">Cake</button>
            <button onClick={()=>handelItem('Ice Cream')} className="rounded-full border border-gray-300 bg-gray-200 active:bg-green-600 active:text-white text-gray-700 transition duration-[.2s] px-6 py-2 text-sm font-bold">Ice Cream</button>
            <button onClick={()=>handelItem('Pizza')} className="rounded-full border border-gray-300 bg-gray-200 active:bg-green-600 active:text-white text-gray-700 transition duration-[.2s] px-6 py-2 text-sm font-bold">Pizza</button>
          </div>
        </div>
        {/*-*-*-*-*-*-* Button Part End -*-*-*-*-*-**/}

      {/* *-*-*-*-*-*-*- Card Part Start *-*-*-*-*-*-*-*/}
      <div className="grid-container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        {
          OneDtat.map((item) => (
            <div key={item.id} className="card relative bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            
              {/*------ Image Partr Start ------*/}

              <div className="image-wrapper w-full h-48 overflow-hidden flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-full h-full object-fill"/>
              </div>

              {/*------ Image Partr End ------*/}

              {/* ^^^^^^^^ Discount Part Start ^^^^^^^^*/}

              {item.discount && (
                <div className="badge absolute top-3 right-3 bg-[#FAB12F] text-black font-bold text-xs py-1 px-3 rounded-full">
                  {item.discount}20% Off
                </div>
              )}

              {/* ^^^^^^^^ Discount Part End ^^^^^^^^*/}

              {/* //////// Text Part Start \\\\\\\\*/}

              <div className="content p-4">
                <h1 className="title text-lg font-bold text-gray-800 truncate">{item.name}</h1>
                  <p className="details my-3 text-sm text-gray-600 truncate"> {item.details}</p>
                    <div className="price mt-4 text-gray-700">
                      <span className={`original-price text-lg ${item.discount ? "line-through" : "font-bold"}`}>{item.price}$</span>
                         {item.discount && (
                            <span className="discounted-price text-lg font-semibold text-green-600 ml-2">{item.discount_price}$</span>
                          )}
                    </div>
                  <h2 className="category mt-2 text-xs font-medium text-gray-500 uppercase">{item.category}</h2>
              </div>

              {/* //////// Text Part End \\\\\\\\*/}              
          </div>
        ))}
      </div>
      {/* *-*-*-*-*-*-*- Card Part End *-*-*-*-*-*-*-*/}
    </div>
  );
};

export default Try;
