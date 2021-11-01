import { useAllAsteroidsData } from "./useAllAsteroidsData";

export const useLargestAsteroid = () => {
  const allAsteroids = useAllAsteroidsData();
  let largestAsteroid = allAsteroids[0];

  allAsteroids.forEach((asteroid) => {
    const largestData =
      asteroid.estimated_diameter.kilometers.estimated_diameter_max;
    const currentLargest =
      largestAsteroid.estimated_diameter.kilometers.estimated_diameter_max;

    if (largestData > currentLargest) {
      largestAsteroid = asteroid;
    }
  });

  return largestAsteroid;
};
