import React from "react";
import Link from "next/link";
import Header from "./../../components/Header";

const fetchRecipesAreas = async () => {
  await new Promise((res) => setTimeout(res, 500)); // for showing loading
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response;
};

const Index = () => {
  const [areas, setAreas] = React.useState([]);

  React.useEffect(() => {
    fetchRecipesAreas().then((response) => {
      setAreas(response.meals.map((m) => m.strArea));
    });
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {areas.map((area, index) => (
          <Link
            className="py-10 text-2xl font-bold text-center bg-gray-300 rounded shadow-gray-500 hover:bg-blue-500 hover:text-white"
            href={`/types/${area}`}
            key={index}
          >
            {area}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Index;
