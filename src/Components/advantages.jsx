function Advantages(){
    return(
        <div className="flex my-[120px] justify-center gap-[120px]">
            <div className="cust-ad advantages text-center">
                <p className="text-3xl font-[750]">Customer Advantages</p>
                <ul className="mt-[25px] text-[20px] px-[20px] font-[450]">
                    <li>Shop Local</li>
                    <li>Fast and Reliable</li>
                    <li>Support Local</li>
                    <li>Transparent Pricing</li>
                    <li>Secure</li>
                </ul>
                <div className="text-center">
                    <button className="mt-[25px] bg-black text-white h-[50px] w-[100px] rounded-lg hover:bg-white hover:border-black hover:border-2 hover:text-black hover:transition-all duration-150 ease-out hover:ease-in">Buy Here</button>
                </div>
            </div>
            <div className="shop-ad advantages text-center">
                <p className="text-3xl font-[750]">Shopkeeper Advantages</p>
                <ul className="mt-[25px] text-[20px] px-[20px] font-[450]">
                    <li>Increased Reach</li>
                    <li>Faster Sales</li>
                    <li>Attract New Customers</li>
                    <li>Convenience</li>
                    <li>Secure</li>
                </ul>
                <div className="text-center">
                    <button className="mt-[25px] bg-[#FD6507] text-white h-[50px] w-[100px] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] duration-150 ease-out hover:ease-in hover:transition-all">Sell Here</button>
                </div>
            </div>
        </div>
    )
}

export default Advantages