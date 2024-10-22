import img from "../../about.png";

const About = () => {

    return (
        <div className="flex items-center justify-center flex-grow md:flex-row flex-col w-full p-4 gap-4 md:gap-0">
            <div className="md:w-1/2 md:my-20 mx-4 flex flex-col flex-wrap justify-center items-center md:rounded-2xl md:shadow-gray-400 md:shadow-md p-3">
                <img src={img} className="w-80 rounded-md"></img>
            
            <div className="mt-10 flex flex-col text-wrap items-center justify-center w-96 gap-4">
            <h1><span className="font-bold text-2xl">PlateMate</span><span className="text-xl font-semibold"> - Your Perfect Food Ordering companion</span></h1>
            
 
            <p className="font-medium ">At PlateMate we bring your favorite flavors right to your doorstep, offering a delicious variety of dishes crafted to satisfy every craving.</p>
            </div>
            </div>
        </div>

       
    )
}

export default About;