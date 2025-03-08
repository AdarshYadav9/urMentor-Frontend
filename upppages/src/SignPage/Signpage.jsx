// import "tailwindcss/tailwind.css";

function SignUpp() {
    return (
        <div className="flex h-screen w-screen">
            {/* Left Container */}
            <div className="w-3/5 h-full bg-gray-900 text-white flex flex-col justify-center items-center">
                <div className="absolute top-5 left-5 bg-black p-2 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-white uppercase">UrMentor</h3>
                </div>
                <h2 className="text-4xl font-bold mb-10 text-center">Welcome to UrMentor</h2>
                <div className="bg-black p-5 rounded-xl shadow-lg text-center w-80">
                    <p className="text-lg font-semibold">Empowering teachers, inspiring learners</p>
                    <p className="text-sm mt-2">Your journey to knowledge starts here</p>
                </div>
                <div className="bg-black p-5 rounded-xl shadow-lg text-center w-80 mt-5">
                    <p className="text-lg font-semibold">Seamless, distraction-free learning designed to help you grow effortlessly.</p>
                </div>
            </div>
            {/* Right Container */}
            <div className="w-2/5 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-3xl font-semibold text-center mb-5 underline">SIGNUP</h2>
                    <div className="space-y-4">
                        <div >
                            <label className="block text-gray-700 mb-[0.5rem]">Email / Phone Number:</label>
                            <input type="text" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Email/Phone" />
                        </div>
                        <div>
                            <label className="block text-gray-700  mb-[0.5rem]">Password:</label>
                            <input type="password" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Password" />
                        </div>
                        <div className="text-right text-blue-500 text-sm">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div  className="space-y-1">
                        <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition ></div>">Sign In</button>
                        <div className="text-center ml-[12.4rem] mt-1">
                            <a href="#" className="text-blue-500 text-sm">Create an Account</a>
                        </div></div>
                        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-lg shadow hover:shadow-md">
                            <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                alt="Google Logo"
                                className="w-5 h-5"
                            />

                            Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-lg shadow hover:shadow-md">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-5 h-5" />
                            Continue with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpp;
