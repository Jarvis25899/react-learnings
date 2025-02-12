import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import ErrorMessage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import useFetch from "../hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isFetching, setIsFetching] = useState(false);
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [error, setError] = useState();

  const { isUpdating, loadingText, error, fetchedData } = useFetch(
    fetchSortedPlaces,
    []
  );

  // useEffect(() => {
  //   async function fetchPlaces() {
  //     setIsFetching(true);
  //     try {
  //       const places = await fetchAvailablePlaces();

  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces = sortPlacesByDistance(
  //           places,
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //         setAvailablePlaces(sortedPlaces);
  //         setIsFetching(false);
  //       });
  //     } catch (error) {
  //       setError({
  //         message:
  //           error.message || "Could not fetch places. Please try again later.",
  //       });
  //       setIsFetching(false);
  //     }
  //   }

  //   fetchPlaces();
  //   // fetch("http://localhost:3000/places")
  //   //   .then((response) => response.json())
  //   //   .then((data) => setAvailablePlaces(data.places));
  // }, []);

  if (error) {
    return <ErrorMessage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={fetchedData}
      isLoading={isUpdating}
      loadingText={loadingText}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
