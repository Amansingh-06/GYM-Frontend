import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Header() {
    const [isHoveredFeatures, setIsHoveredFeatures] = useState(false);
    const [isHoveredDietPlan, setIsHoveredDietPlan] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState(""); // For mobile menu dropdowns

    const toggleMenu = (menu) => {
        setExpandedMenu((prev) => (prev === menu ? "" : menu));
    };

    return (
        <>
            {/* Main Header */}
            <div className="bg-white flex px-8 lg:px-28 justify-between py-5 items-center z-30 fixed w-full shadow-md">
                <div>
                    <h1 className="text-3xl font-semibold cursor-pointer">
                        Gym <span className="text-orange-600">Fluencer</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-5 items-center">
                    <ul className="flex gap-5">
                        <li className="hover:text-orange-600 cursor-pointer">Features</li>
                        <li
                            className="cursor-pointer relative group hover:text-orange-600"
                            onMouseEnter={() => setIsHoveredDietPlan(true)}
                            onMouseLeave={() => setIsHoveredDietPlan(false)}
                        >
                            <div className="flex justify-center items-center gap-1">
                                Diet Plan <FaChevronDown />
                            </div>
                            <ul
                                className={`absolute -left-2 mt-7 bg-orange-600 text-white shadow-md p-2 rounded-md overflow-hidden transition-all duration-500 ease-in-out ${isHoveredDietPlan ? "h-36 opacity-100" : "h-0 opacity-0"
                                    }`}
                            >
                                <li className="py-2 px-4 hover:bg-orange-700">Diet 1</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Diet 2</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Diet 3</li>
                            </ul>
                        </li>
                        <li
                            className="cursor-pointer relative group hover:text-orange-600"
                            onMouseEnter={() => setIsHoveredFeatures(true)}
                            onMouseLeave={() => setIsHoveredFeatures(false)}
                        >
                            <div className="flex justify-center items-center gap-1">
                                Workout Plan <FaChevronDown />
                            </div>
                            <ul
                                className={`absolute left-2 mt-7 bg-orange-600 text-white shadow-md p-2 rounded-md overflow-hidden transition-all duration-500 ease-in-out ${isHoveredFeatures ? "h-36 opacity-100" : "h-0 opacity-0"
                                    }`}
                            >
                                <li className="py-2 px-4 hover:bg-orange-700">Plan 1</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Plan 2</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Plan 3</li>
                            </ul>
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">Blog</li>
                        <li className="hover:text-orange-600 cursor-pointer">FAQs</li>
                        <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex gap-6">
                    <button className="bg-orange-600 text-white rounded-2xl px-5 py-1">GET Started</button>
                    <button className="bg-orange-600 text-white rounded-2xl px-5 py-1">Login</button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes size={30} className="text-orange-600" /> : <FaBars size={30} className="text-orange-600" />}
                    </button>
                </div>
            </div>

            {/* Mobile Sliding Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-500 z-40`}
            >
                <ul className="flex flex-col gap-4 p-5">
                    <li className="hover:text-orange-600 cursor-pointer">Features</li>
                    <li
                        className={`cursor-pointer ${expandedMenu === "diet" ? "text-orange-600" : ""}`}
                        onClick={() => toggleMenu("diet")}
                    >
                        Diet Plan {expandedMenu === "diet" ? "-" : "+"}
                        {expandedMenu === "diet" && (
                            <ul className="bg-orange-600 text-white mt-2 shadow-md rounded-md">
                                <li className="py-2 px-4 hover:bg-orange-700">Diet 1</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Diet 2</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Diet 3</li>
                            </ul>
                        )}
                    </li>
                    <li
                        className={`cursor-pointer ${expandedMenu === "workout" ? "text-orange-600" : ""}`}
                        onClick={() => toggleMenu("workout")}
                    >
                        Workout Plan {expandedMenu === "workout" ? "-" : "+"}
                        {expandedMenu === "workout" && (
                            <ul className="bg-orange-600 text-white mt-2 shadow-md rounded-md">
                                <li className="py-2 px-4 hover:bg-orange-700">Plan 1</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Plan 2</li>
                                <li className="py-2 px-4 hover:bg-orange-700">Plan 3</li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:text-orange-600 cursor-pointer">Blog</li>
                    <li className="hover:text-orange-600 cursor-pointer">FAQs</li>
                    <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
                </ul>
                <div className="flex flex-col gap-4 p-5">
                    <button className="bg-orange-600 text-white rounded-2xl px-5 py-1">GET Started</button>
                    <button className="bg-orange-600 text-white rounded-2xl px-5 py-1">Login</button>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMobileMenuOpen(false)}></div>}
        </>
    );
}

export default Header;
