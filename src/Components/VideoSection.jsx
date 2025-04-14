import React from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const VideoSectionData = [
    {
        id: 1,
        video: "/Videos/VIdeo1.mp4",
        profile: "/Images/Banner99.jpeg",
        title: "Long Stay Ultra Matte Lipstick",
        description: "LONG STAY ULTRA MATTE LIPSTICK",
        price: 345,
        button: "Buy Now",
        tag: "New"
    },
    {
        id: 2,
        video: "/Videos/Video2.mp4",
        profile: "/Images/Banner99.jpeg",
        title: "Pure Ghee & 24K Gold Kit",
        description: "DEEP NOURISHING NIGHT TREATMENT CREAM",
        price: 2910,
        discountPrice: 3880,
        discount: "25% Off",
        button: "Buy Now",
        tag: "Best Seller"
    },
    {
        id: 3,
        video: "/Videos/Video3.mp4",
        profile: "/Images/Banner99.jpeg",
        title: "Long Stay Relaxed Matte Lipstick",
        description: "Relaxed Matte Finish",
        price: 425,
        button: "Buy Now",
        tag: "Hot"
    },
    {
        id: 4,
        video: "/Videos/VIdeo1.mp4",
        profile: "/Images/Banner99.jpeg",
        title: "8 in 1 Eyeshadow Lidsticks",
        description: "w/ my mini makeup favourites",
        price: 645,
        button: "Buy Now",
        tag: "Limited"
    },
    {
        id: 5,
        video: "/Videos/Video2.mp4",
        profile:"/Images/Banner99.jpeg",
        title: "Long Stay Perfect Matte",
        description: "Perfectly Matte Finish",
        price: 445,
        button: "Buy Now",
        tag: "Popular"
    },
    {
        id: 6,
        video: "/Videos/Video3.mp4",
        profile:"/Images/Banner99.jpeg",
        title: "Long Stay Relaxed Matte Lipstick",
        description: "Relaxed Matte Finish",
        price: 425,
        button: "Buy Now",
        tag: "Hot"
    },
];

const VideoSection = () => {
    return (
        <div className="px-4 py-6 bg-white">
            <h2 className="text-center text-3xl font-semibold mb-6">WATCH, BUY, GLOW</h2>
            <div className="flex gap-4 overflow-x-auto">
                {VideoSectionData.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[230px] max-w-[240px] bg-white rounded-xl shadow-2xl flex-shrink-0"
                    >
                        <div className="relative rounded-t-xl overflow-hidden h-[320px]">
                            <video
                                src={item.video}
                                controls
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover"
                            />
                           
                            <div className="absolute bottom-2 right-2 flex text-white space-x-1">
                                <button className="!bg-black bg-opacity-40 p-2 rounded-full">
                                    <FaHeart />
                                </button>
                                <button className="!bg-black bg-opacity-40 p-2 rounded-full">
                                    <FaShareAlt />
                                </button>
                            </div>

                            {/* Tag on the top right */}
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs py-1 px-2 rounded-full">
                                {item.tag}
                            </div>
                        </div>
                        <div className="p-3 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <img
                                    src={item.profile}
                                    alt="profile"
                                    className="w-6 h-6 rounded-full"
                                />
                                <span className="text-sm text-gray-700 font-medium text-ellipsis line-clamp-1">
                                    {item.title}
                                </span>
                            </div>
                            <div className="text-base font-semibold mb-1">
                                INR {item.price}{" "}
                                {item.discountPrice && (
                                    <span className="text-sm line-through text-gray-500 ml-1">
                                        INR {item.discountPrice}
                                    </span>
                                )}
                                {item.discount && (
                                    <span className="text-sm text-green-600 ml-1">{item.discount}</span>
                                )}
                            </div>
                            <button className="w-full mt-1 py-2 text-sm !bg-[#88564d] text-white rounded-md">
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSection;
