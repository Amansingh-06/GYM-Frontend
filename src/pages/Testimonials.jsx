import React from "react";
import Slider from "react-slick";

const testimonials = [
    {
        name: "David Fahim",
        role: "CEO",
        image: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/11/client2.jpg",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
    {
        name: "Honey Jisa",
        role: "CEO",
        image: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/client_01.jpg",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
    {
        name: "John Doe",
        role: "Manager",
        image: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/client_02.jpg",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
    {
        name: "Sarah Lee",
        role: "CTO",
        image: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/client_04.jpg",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Default value for medium screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // For medium screens (tablets)
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // For smaller screens (phones)
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-white py-16 px-4 relative top-60 md:top-5 sm:top-10">
            <h2 className="text-4xl font-bold text-center mb-12">WHAT CLIENT'S SAY</h2>
            <div className="max-w-6xl mx-auto">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="text-center p-6 gap-10 flex flex-col items-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full w-24 h-24 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                            <p className="text-orange-600 mb-2">{testimonial.role}</p>
                            <p className="text-gray-700">{testimonial.feedback}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
