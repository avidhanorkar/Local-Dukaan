import Records from './shop-category.json'
function ShopCategory(){
    const shop = Records.shop;
    return(
        <>
            <p className="text-3xl font-[700] pt-[25px] text-center">Select The Shop </p>
            <div className='flex p-[80px] gap-[50px]'>

                <div className='card bg-[#F9E0D0] p-[20px] w-[300px] rounded-lg'>
                    <img src="" alt="" className="h-[150px] mx-[auto]"/>
                    <p className="text-2xl font-[700]">name</p>
                    <p className="font-[400] text-gray-500">description</p>
                </div>

            </div>
        </>
    )
}

export default ShopCategory