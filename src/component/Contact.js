import contact from "../../contact.svg";

const Contact = () => {
    return (
        <div className="w-full flex md:flex-row flex-col-reverse flex-grow items-center justify-center p-4">
            <img src={contact} alt="contact" className="h-full md:w-1/2 flex-grow mt-10"/>
            <div className="md:w-1/2 w-full md:flex flex-col flex-grow text-center items-center">
                <h1 className="text-center font-bold text-2xl md:text-5xl text-gray-600 p-4 m-4">Contact Us</h1>
                <form className="flex flex-col gap-2 items-center w-full text-center mr-10">
                    <input className="mb-2 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none" type="text" placeholder="name" />
                    <input className="mb-2 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none" type="text" placeholder="email" />
                    <textarea className="mb-2 border border-orange-400 placeholder:text-orange-400 rounded-3xl px-3 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none" type="text" placeholder="message" />
                    <button className="w-fit bg-orange-400 text-white rounded-xl px-4 py-2 mt-3 hover:bg-orange-300">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;