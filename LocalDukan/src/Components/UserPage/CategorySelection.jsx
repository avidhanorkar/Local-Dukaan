import { Link } from 'react-router-dom'
import Records from './category-page.json'
function CategoryPage(){
    const categories = Records.categories;
    return (
        <>
            <div className="written-content bg-[#FFF7F0]">
                <p className='text-3xl font-[700] pt-[25px] text-center '>Explore the Categories</p>
                <p className='text-1xl font-[500] pt-[10px] text-gray-600 text-center '>Shop all your everyday essentials by Discover a variety of local stores near you!<br/>Local Dukan connects you with a diverse range of local shops, offering convenient delivery straight to your doorstep.</p>
                <div className="flex p-[80px] gap-[50px]">
                {categories.map((Rec) => { return (
                    <div className="card bg-[#F9E0D0] p-[20px] w-[300px] rounded-lg">
                        
                            <img src={Rec.img} alt="" className="h-[150px] mx-[auto]"/>
                            <p className="text-2xl font-[700]">{Rec.name}</p>
                            <p className="font-[400] text-gray-500">{Rec.description}</p>
                            <Link to={Rec.Link}>
                                <button className="text-[#FD650B] hover:underline font-[500]">Explore Here</button>
                            </Link>
                    </div>
                )})}

                </div>
            </div>
            <div className="category-card">

            </div>
        </>
    )
}

export default CategoryPage