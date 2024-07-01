import React, { useState } from "react";

function Category() {
  const [categories, setCategories] = useState([
    {
      cate: "Kirana",
      subline: "Our neighborhood stores: Stock up on daily essentials from local grocers, pharmacies, and more."
    },
    {
      cate: "Pharmacy",
      subline: "Refill prescriptions, find over-the-counter meds, and get expert advice - all at stores you trust."
    },
    {
      cate: "Stationers",
      subline: "Stock up on pens, paper, and everything in between. Keep your home office or classroom organized!"
    },
    {
      cate: "More To Be Coming Soon.",
      subline: "/"
    }
  ]);

  const Cate = ({ category }) => {
    return (
      <>
        <div className="category-card bg-[#F9E0D0] h-[150px] w-[400px] p-5 rounded-lg">
          <div className="categories text-3xl font-[700] pb-2">{category.cate}</div>
          <div className="categories text-1xl font-[350]">{category.subline}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="categories bg-[#FFF7F0] p-[50px]">
        <p className="text-3xl font-[800] ">Featured Categories</p>
        <p>
          Shop all your everyday essentials by Discover a variety of local stores
          near you.
        </p>
        <div className="flex gap-[25px] mt-5">
            {categories.map((category) => {
              return <Cate key={category.cate} category={category} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Category;