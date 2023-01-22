import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ image, heading, desc, btnLink }) => {
  return (
    <>
      <div className="p-3 mt-5 hover:mt-0 ease-linear duration-500 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link href={btnLink}>
          <Image
            className="rounded-t-lg w-full h-full"
            src={image}
            alt=""
            width="0"
            height="100"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <div className="p-5">
          <Link href={btnLink}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <Link
            href={btnLink}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-400 rounded-lg focus:ring-4 focus:outline-none transition duration-500 focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-lime-700 dark:focus:ring-blue-800"
          >
            {" "}
            More details
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
