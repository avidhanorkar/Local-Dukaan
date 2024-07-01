function Feature(){
    return(
        <>
            <div className="flex bg-white gap-[25px] py-[120px] ">
                <div className="bg-[#F9E0D0] h-[400px] rounded-xl w-[600px] ml-[auto] ">
                    <p className="text-gray-900 text-4xl pt-12 pl-12 font-bold">Simple and Easy Way to Buy Things from the People You Know. </p>
                    <p className="px-12">This platform aims to help the shopkeepers in the locality. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam maxime non possimus tenetur, doloremque impedit laboriosam voluptatibus, voluptate, magnam debitis cupiditate quae! Quasi magni voluptate eius. Corrupti ipsum odio saepe.
                    Sed quo, nulla aspernatur vitae beatae repudiandae porro ex mollitia odit a optio ipsam inventore fugit assumenda libero officiis cum corporis provident odio officia obcaecati voluptatem error perspiciatis iure. Architecto!</p>
                </div>
                <div className="features flex gap-[25px] flex-col mr-[auto]">
                    <div className="flex gap-[25px]">
                        <div className="feature-card">
                            <p className="feature">Fast</p>
                            <p className="feature-desription">Find and buy from local shops with a speedy and user-friendly experience.</p>
                        </div>
                        <div className="feature-card">
                            <p className="feature">Secure</p>
                            <p className="feature-desription">Shop with confidence knowing your information and purchases are protected.</p>
                        </div>
                    </div>
                    <div className="flex gap-[25px]">
                        <div className="feature-card">
                            <p className="feature">Reliable</p>
                            <p className="feature-decription">Trustworthy platform ensuring smooth transactions and on-time deliveries.</p>
                        </div>
                        <div className="feature-card">
                            <p className="feature">Local</p>
                            <p className="feature-desription">Support your community by conveniently shopping from nearby stores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature;