import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    {
        id: 1,
        src: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/slide2_2.jpg",
        text: "Slide 1",
        heading: (
            <>
                BUILD <span className="text-orange-600">YOUR</span> BODY <span className="text-orange-600">STRONG</span>
            </>
        ),
        para: "Ready to change your physique, but can't work out in the gym?",
        headingAnimation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 50 },
        },
        paraAnimation: {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -50 },
        },
        button: {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -50 },
        },
    },
    {
        id: 2,
        src: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/slide2.jpg",
        text: "Slide 2",
        heading: (
            <>
                ACHIEVE <span className="text-green-500">YOUR</span> FITNESS <span className="text-purple-500">GOALS</span>
            </>
        ),
        para: "Transform your body and mind with our effective programs.",
        headingAnimation: {
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 50 },
        },
        paraAnimation: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -50 },
        },
        button: {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -50 },
        },
    },
];

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6500); // Interval greater than the animation duration
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto overflow-hidden bg-gray-100 h-[calc(100vh-5rem)] flex justify-center items-center top-20">
            {/* Text and Heading Animations */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={images[currentSlide].id} // Key ensures the animation is triggered for each new slide
                    className="absolute top-1/3 sm:top-1/4 w-full text-center z-10 px-4 sm:px-8"
                >
                    <motion.h1
                        className="text-4xl sm:text-6xl font-bold text-white"
                        initial={images[currentSlide].headingAnimation.initial}
                        animate={images[currentSlide].headingAnimation.animate}
                        exit={images[currentSlide].headingAnimation.exit}
                        transition={{ duration: 1 }}
                    >
                        {images[currentSlide].heading}
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-200 mt-4"
                        initial={images[currentSlide].paraAnimation.initial}
                        animate={images[currentSlide].paraAnimation.animate}
                        exit={images[currentSlide].paraAnimation.exit}
                        transition={{ duration: 1 }}
                    >
                        {images[currentSlide].para}
                    </motion.p>
                    <motion.button
                        className="text-sm sm:text-lg text-gray-200 mt-6 border px-8 py-1 rounded-full font-bold border-orange-600 hover:bg-orange-600 hover:text-white"
                        initial={images[currentSlide].button.initial}
                        animate={images[currentSlide].button.animate}
                        exit={images[currentSlide].button.exit}
                        transition={{ duration: 1 }}
                    >
                        Join Us
                    </motion.button>
                </motion.div>
            </AnimatePresence>

            {/* Image Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={images[currentSlide].id}
                    className="relative flex items-center justify-center w-full h-full"
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 1.2 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={images[currentSlide].src}
                        alt={images[currentSlide].text}
                        className="absolute inset-0 object-cover w-full h-full"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ImageSlider;
