import Records from './shop-category.json'
function ShopCategory(){
    const Kirana = Records.Kirana;
    const Pharamacy = Records.Pharamacy;
    const Stationary = Records.Stationary;
    const Grocery = Records.Grocery;
    const List = Records.List;
    return(
        <>
            <p className="text-3xl font-[700] pt-[25px] text-center">Select The Shop </p>
            <p className="text-3xl font-[600] text-center">Kirana Shops</p>
            <div className='flex p-[80px] gap-[50px]'>
            {Kirana.map((Rec) => { return (
                <div key={Rec.id}>
                {List.map((ListItem) => {
                    return (
                        <a href={`https://wa.me/${Rec.phone}/?text=${ListItem.list}`} className='cursor-pointer'>
                            <div className='card bg-[#F9E0D0] p-[20px] w-[300px] rounded-lg'>
                                <img src={Rec.img} alt="" className="h-[150px] mx-[auto] rounded-lg"/>
                                <p className="text-2xl font-[700]">{Rec.name}</p>
                                <p className="font-[400] text-gray-500">{Rec.category}</p>
                            </div>
                        </a> 
                    );
                })}
                </div>
            )})}
            </div>
            <p className="text-3xl font-[600] text-center">Pharmacy Shops</p>
            <div className='flex p-[80px] gap-[50px]'>
            {Pharamacy.map((Rec) => { return (
                <a href={`https://wa.me/${Rec.phone}/?text=${Rec.List}}`} className='cursor-pointer'>
                <div className='card bg-[#F9E0D0] p-[20px] w-[300px] rounded-lg'>
                    <img src={Rec.img} alt="" className="h-[150px] mx-[auto] rounded-lg"/>
                    <p className="text-2xl font-[700]">{Rec.name}</p>
                    <p className="font-[400] text-gray-500">{Rec.category}</p>
                </div>
                </a>
            )})}
            </div>
            <p className="text-3xl font-[600] text-center">Stationary Shops</p>
            <div className='flex p-[80px] gap-[50px]'>
            {Stationary.map((Rec) => { return (
                <a href={`https://wa.me/${Rec.phone}/?text=${Rec.List}}`} className='cursor-pointer'>
                <div className='card bg-[#F9E0D0] p-[20px] w-[300px] rounded-lg'>
                    <img src={Rec.img} alt="" className="h-[150px] mx-[auto] rounded-lg"/>
                    <p className="text-2xl font-[700]">{Rec.name}</p>
                    <p className="font-[400] text-gray-500">{Rec.category}</p>
                </div>
                </a>
            )})}
            </div>
            <p className="text-3xl font-[600] text-center">Grocery Shops</p>
            <div className='flex p-[80px] gap-[50px]'>
            {Grocery.map((Rec) => { return (
                <a href={`https://wa.me/${Rec.phone}/?text=${Rec.List}}`} className='cursor-pointer'>
                <div className='card bg-[#F9E0D0] p-[20px] w-[300px] rounded-lg'>
                    <img src={Rec.img} alt="" className="h-[150px] mx-[auto] rounded-lg"/>
                    <p className="text-2xl font-[700]">{Rec.name}</p>
                    <p className="font-[400] text-gray-500">{Rec.category}</p>
                </div>
                </a>
            )})}
            </div>
        </>
    )
}

export default ShopCategory