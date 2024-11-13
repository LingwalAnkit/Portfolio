import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 mb-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Ankit Lingwal
                            <span className="hidden sm:block text-lg mt-4">I am a full-stack developer skilled in Web2 and Web3 technologies, with expertise in React, Node.js, Tailwind CSS, blockchain development, and creating tokens and dApps. My focus is on building scalable, user-centric applications that integrate decentralized and traditional web elements.</span>
                        </h2>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 mt-8 mb-8 mx-36"
                            to="/contact"
                        >
                        Contact-me
                        </Link>
                    </div>

                </div>

                <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full mt-32">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                <Link
                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 mt-8 mb-8"
                    to="/"
                >
                    Download CV
                </Link>
            </div>
        </div>
    );
}
