import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";
import ErrorMessage from "./Error.jsx";
import { fetchAvailableMeals } from "../http.js";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      try {
        const data = await fetchAvailableMeals();
        setMeals(data);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch meals. Please try again later",
        });
      }
      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  if (error) {
    return <ErrorMessage title="An error occured" message={error.message} />;
  }

  return (
    <div id="meals">
      {isLoading && <h1 style={{ margin: "0 auto" }}>Fetching the meals...</h1>}
      {meals?.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
