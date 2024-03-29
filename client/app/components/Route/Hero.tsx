import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:relative">
            <Image
              src={require("../../../public/assets/hero_banner_img1.jpg")}
              alt="hero"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:ml-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white  mb-4 md:mb-6">
              Improve your Online Learning Experience Instantly
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover 20k+ courses from 200+ universities and institutions.
            </p>
            <div className="flex items-center mb-6">
              <input
                type="search"
                placeholder="Search Courses..."
                className="flex-1 bg-gray-100 border border-gray-300 text-black rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none">
                <BiSearch size={24} />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={require("../../../public/assets/hero_banner_img1.jpg")}
                alt="user1"
                className="w-12 h-12 rounded-full"
              />
              <Image
                src={require("../../../public/assets/hero_banner_img1.jpg")}
                alt="user2"
                className="w-12 h-12 rounded-full -ml-3"
              />
              <Image
                src={require("../../../public/assets/hero_banner_img1.jpg")}
                alt="user3"
                className="w-12 h-12 rounded-full -ml-3"
              />
              <p className="text-gray-600 text-lg font-semibold">
                Join 500k+ learners who trust us.{" "}
                <Link href="/courses" className="text-green-500 hover:text-green-700">
                  View Courses
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
