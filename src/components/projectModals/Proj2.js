const Proj2 = ({ set2On }) => {

    const handleCancelClick = () => {
        set2On(false)
    }

    return (

        <div className="bg-zinc-200 bg-opacity-70 fixed inset-0 z-50 transition duration-75">
            <div className="flex flex-col h-screen justify-center items-center ">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                    <img class="rounded-t-lg" src="proj2big.jpg" alt=""/>
                    </a>
                    <div class="p-6">
                    <div className="grid md:grid-cols-2 gap-10 pb-3">
                        <h5 class="font-medium text-[#216773] text-xl mb-2 col-start-1 col-end-7">Portfolio Page</h5>
                        <button onClick={handleCancelClick} className="col-end-8 rounded max-w-[80px] max-h-[30px] mr-3 px-4 text-white bg-[#416b70]">Close</button>
                    </div>
                    <p class="text-gray-700 text-base mb-4">
                        Portfolio website created to showcase resume and projects. 
                    </p>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Node.js</span>
                    <br></br>
                    <br></br>
                    <a href="https://github.com/SiaKong/SiaKong.github.io">Link to Github</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Proj2