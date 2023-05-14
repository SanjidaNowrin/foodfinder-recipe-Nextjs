import React from "react";
import { useRouter } from "next/router";
import Header from "./../../../../components/Header";
import Image from "next/image";
import Link from "next/link";

const getRecipeDetails = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
};

const Details = () => {
  const router = useRouter();
  const recipeId = router?.query?.id;

  const [recipeDetails, setRecipeDetails] = React.useState([]);

  React.useEffect(() => {
    async function loadRecipeDetails() {
      const details = await getRecipeDetails(recipeId);
      setRecipeDetails(details?.meals[0]);
    }
    loadRecipeDetails();
  }, [recipeId]);

  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => recipeDetails[ingKey])
    .filter(Boolean);

  return (
    <>
      <Header />
      {/* details section */}
      <div className=" grid  grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src={recipeDetails.strMealThumb || "/"}
            width={500}
            height={500}
            alt="image"
            className="w-full"
          />
        </div>
        <div className="p-5">
          <h1>
            Recipe Name:
            <span className="font-bold text-2xl">{recipeDetails.strMeal}</span>
          </h1>
          <div className="mt-3">
            <p>Ingredients List</p>
            {ingredients.map((ing, index) => (
              <span
                className="bg-blue-500 text-white px-2 py-1  rounded mr-2 mb-2 inline-block"
                key={index}
              >
                {ing}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <p>Video Link</p>
            {recipeDetails.strYoutube && (
              <Link
                href={recipeDetails.strYoutube}
                target="_blank"
                className="text-blue-500 "
              >
                <p>How to make {recipeDetails.strMeal}</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
