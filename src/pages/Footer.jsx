import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-5 relative top-56 sm:top-20">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* About Company */}
                <div>
                    <h4 className="text-lg font-bold mb-4">About Company</h4>
                    <p className="text-sm mb-4">
                        Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim dignissim. Suspen disse at eros tempus, congue consequat.
                    </p>
                    <p className="text-sm">
                        Fusce sit amet urna feugiat. Praesent vel rutrum purus. Nam vel dui eu risus.
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-4 justify-center sm:justify-start">
                        <a href="#" className="text-orange-600">
                            <FaFacebook className="text-2xl sm:text-3xl" />
                        </a>
                        <a href="#" className="text-orange-500">
                            <FaTwitter className="text-2xl sm:text-3xl" />
                        </a>
                        <a href="#" className="text-orange-500">
                            <FaGooglePlusG className="text-2xl sm:text-3xl" />
                        </a>
                        <a href="#" className="text-orange-500">
                            <FaLinkedin className="text-2xl sm:text-3xl" />
                        </a>
                        <a href="#" className="text-orange-500">
                            <FaPinterest className="text-2xl sm:text-3xl" />
                        </a>
                        <a href="#" className="text-orange-500">
                            <FaRss className="text-2xl sm:text-3xl" />
                        </a>
                    </div>
                </div>

                {/* Follow Us on Twitter */}
                <div>
                    <h4 className="text-2xl font-bold mb-4">Follow Us on Twitter</h4>
                    <p className="text-4xl font-bold ml-12 cursor-pointer">X</p>
                    <p className="text-2xl mt-4 font-bold">Nothing to see here -</p>
                </div>

                {/* Flickr Photos */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Flickr Photos</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
                        <img
                            src="https://live.staticflickr.com/65535/49971120798_969fd05cb8_t.jpg"
                            alt="Flickr"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://live.staticflickr.com/65535/49971636826_902d3d19b5_t.jpg"
                            alt="Flickr"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://live.staticflickr.com/65535/49971121318_284e730dea_t.jpg"
                            alt="Flickr"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://live.staticflickr.com/65535/49971636906_9c1bc91e4a_t.jpg"
                            alt="Flickr"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://live.staticflickr.com/65535/49971121403_1cb43aa23b_t.jpg"
                            alt="Flickr"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://live.staticflickr.com/65535/49971899867_945a724c1e_t.jpg"
                            alt="Flickr"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Corporate Office */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Corporate Office</h4>
                    <p className="text-sm flex items-center mb-2">
                        <span className="material-icons text-orange-500 mr-2">location_on</span>
                        44 New Design Street, rne 005
                    </p>
                    <p className="text-sm flex items-center mb-2">
                        <span className="material-icons text-orange-500 mr-2">phone</span> 01800433633
                    </p>
                    <p className="text-sm flex items-center mb-2">
                        <span className="material-icons text-orange-500 mr-2">email</span>{" "}
                        info@gymedge.com
                    </p>
                    <p className="text-sm flex items-center">
                        <span className="material-icons text-orange-500 mr-2">fax</span> (123) 118 9999
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                <p className="text-sm">
                    © Copyright GymEdge 2016. All Right Reserved. Designed and Developed by Aman Singh
                </p>
            </div>
        </footer>
    );
};

export default Footer;
