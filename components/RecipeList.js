import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const RecipeList = ({ recipes, type }) => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {recipes.map((recipe, index) => {
          return (
            <div className="overflow-hidden rounded bg-slate-300" key={index}>
              <Image
                src={recipe.strMealThumb}
                height={500}
                width={500}
                alt="image"
              />
              <div className="p-5">
                <h2 className="text-2xl font bold">{recipe.strMeal}</h2>
                <Link
                  className="block px-3 py-1 mt-5 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
                  href={`/types/${type}/${recipe.idMeal}`}
                >
                  Get Recipe Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipeList;
