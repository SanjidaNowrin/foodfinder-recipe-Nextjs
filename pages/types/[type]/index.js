import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RecipeList from "../../../components/RecipeList";

const getRecipes = async (myParam) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${myParam}`
  );
  const res = await response.json();
  return res?.meals;
};

const Index = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecipes(router.query.type);
      setRecipes(res);
    };

    if (router.query.type) {
      fetchData();
    }
  }, [router.query.type]);

  if (!recipes) {
    return <div>Loading...</div>;
  }
  console.log(router.query.type);
  return (
    <div>
      <RecipeList recipes={recipes} type={router.query.type} />
    </div>
  );
};

export default Index;
