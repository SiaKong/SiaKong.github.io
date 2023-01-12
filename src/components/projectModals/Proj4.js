const Proj4 = ({ set4On }) => {

    const handleCancelClick = () => {
        set4On(false)
    }

    return (

        <div className="bg-zinc-200 bg-opacity-70 fixed inset-0 z-50 transition duration-75">
            <div className="flex flex-col h-screen justify-center items-center ">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                    <img class="rounded-t-lg" src="proj4big.jpg" alt=""/>
                    </a>
                    <div class="p-6">
                    <div className="grid md:grid-cols-2 gap-10 pb-3">
                        <h5 class="font-medium text-[#216773] text-xl mb-2 col-start-1 col-end-7">Service Novigrad</h5>
                        <button onClick={handleCancelClick} className="col-end-8 rounded max-w-[80px] max-h-[30px] mr-3 px-4 text-white bg-[#416b70]">Close</button>
                    </div>
                    <p class="text-gray-700 text-base mb-4">
                        App that allows the admin to add services, and the employees can set where and when to provide them, and customers can search and apply for the services.
                    </p>
                    
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Python</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">XML</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Java</span>
                    <span class="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Android Studio</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Firebase Database</span>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">App Design</span>  
                    <br></br>
                    <br></br>
                    <p>Github not available (private)</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Proj4