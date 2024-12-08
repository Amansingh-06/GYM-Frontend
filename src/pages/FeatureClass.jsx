import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SlickSlider = () => {
    const featuredClasses = [
        { id: 1, title: "Meditation", image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", trainer: "Jecu Deoko, David Fahim, John Doe" },
        { id: 2, title: "Cycling", image: "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", trainer: "Selina Stuart, Jenifer Alex" },
        { id: 3, title: "Martial Arts", image: "https://plus.unsplash.com/premium_photo-1664302197765-b16c203cbdca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", trainer: "Jecu Deoko, David Fahim, John Doe" },
        { id: 4, title: "Yoga", image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", trainer: "Alice Brown, John Smith" },
        { id: 5, title: "Strength Training", image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", trainer: "Tom Cruise, Sarah Lee" },
        { id: 6, title: "Cardio", image: "https://images.unsplash.com/photo-1584952449180-f8fddc0b03a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", trainer: "Jane Doe, John Brown" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablet view
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile view
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="px-8 py-8 sm:px-4 lg:px-32 flex flex-col justify-center bg-gray-100 relative top-20 border-2">
            <div className="flex justify-between items-center mt-10">
                <h2 className="text-4xl font-semibold">FEATURED CLASSES</h2>
                <div className="h-[1px] w-2/3 bg-gray-400"></div>
            </div>
            <Slider {...settings} className="mt-8">
                {featuredClasses.map((item) => (
                    <div key={item.id} className="p-5 mt-6">
                        <div className="cursor-pointer shadow-lg bg-white overflow-hidden group relative">
                            {/* Image Wrapper */}
                            <div className="relative">
                                {/* Pseudo Element for Hover Effect */}
                                <div className="absolute inset-0 bg-black bg-opacity-10 scale-y-0 transition-transform duration-700 group-hover:scale-y-105"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover sm:h-40 lg:h-48"
                                />
                            </div>
                            {/* Text Content */}
                            <div className="p-4 group-hover:bg-orange-600 transition-all duration-700">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p>{item.trainer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Custom "Next" Arrow with Sliding Effect
const CustomNextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:translate-x-2"
        onClick={onClick}
        aria-label="Next Slide"
    >
        <ArrowForwardIosOutlinedIcon className="text-orange-600" />
    </div>
);

// Custom "Previous" Arrow with Sliding Effect
const CustomPrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:-translate-x-2"
        onClick={onClick}
        aria-label="Previous Slide"
    >
        <ArrowBackIosNewOutlinedIcon className="text-orange-600" />
    </div>
);

export default SlickSlider;
