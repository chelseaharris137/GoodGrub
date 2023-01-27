import axios from 'axios';

export const getCategories = async () => {
  const { data } = await axios.get('/categories.php');

  return data.categories;
};

export const getMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`filter.php?c=${queryKey[1]}`);

  return data?.meals || [];
};

export const getSingleMeal = async ({ queryKey }) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);

  return data?.meals?.[0];
};
