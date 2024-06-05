import React from "react";
import useScrollReveal from "../utils/useScrollReveal";
const Tours = () => {
  useScrollReveal(".tour-item");
  const toursData = [
    { title: "Duration", content: "5 day tour" },
    { title: "Group Size", content: "Up to 20 people" },
    { title: "Accommodation", content: "Hotel accommodation" },
    { title: "Guides", content: "3 tour guides" },
    { title: "Difficulty", content: "Medium" },
  ];
  return (
    <section className="tour-item p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-8">Our Tours</h2>
      <div className="container mx-auto space-y-12">
        <div className="tour-item flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row ">
          <img
            src="https://koa.com/blog/images/group-of-friends-taking-a-hike.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Starting from $30
            </span>
            <div className="inline-block flex justify-start ">
              <h3 className="text-3xl font-bold mb-5 border-b-2 border-green-400 pb-1">
                Mountain climbing
              </h3>
            </div>
            <div className="flex space-x-4">
              {toursData.map((tour, index) => {
                return (
                  <span
                    key={index}
                    className="text-2xs md:text-sm border font-bold p-1 border-green-200 rounded bg-green-100"
                  >
                    {tour.content}
                  </span>
                );
              })}
            </div>
            <p className="my-6 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
          </div>
        </div>
        <div className=" flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row-reverse">
          <img
            src="https://www.uniquerwandavacations.com/wp-content/uploads/2022/07/canpy-walk-nyungwe.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Starting from $30
            </span>
            <div className="inline-block flex justify-start ">
              <h3 className="text-3xl font-bold mb-5 border-b-2 border-green-400 pb-1">
                Canopy Walk
              </h3>
            </div>
            <div className="flex space-x-4">
              {toursData.map((tour, index) => {
                return (
                  <span
                    key={index}
                    className="text-2xs md:text-sm border font-bold p-1 border-green-200 rounded bg-green-100"
                  >
                    {tour.content}
                  </span>
                );
              })}
            </div>
            <p className="my-6 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
          </div>
        </div>
        <div className=" flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
          <img
            src="https://rwandaecocompany.com/wp-content/uploads/2022/04/lake-kivu.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Starting from $30
            </span>
            <div className="inline-block flex justify-start ">
              <h3 className="text-3xl font-bold mb-5 border-b-2 border-green-400 pb-1">
                Twin Lakes
              </h3>
            </div>
            <div className="flex space-x-4">
              {toursData.map((tour, index) => {
                return (
                  <span
                    key={index}
                    className="text-2xs md:text-sm border font-bold p-1 border-green-200 rounded bg-green-100"
                  >
                    {tour.content}
                  </span>
                );
              })}
            </div>
            <p className="my-6 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
