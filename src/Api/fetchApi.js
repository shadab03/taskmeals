import API from '../config/config';

const fetchCategories = async () => {
  const url = `${API.BASE_URL}/${API.CATEGORIES_ENDPOINT}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};


const fetchMeals = async (category) => {
  const url = `${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=${category}`;
  const response = await fetch(url);
 
  if (response.status === 200) {
    const data = await response.json();
    //console.log(data);
    return data;
  }

  throw Error(404);
};


const fetchMeal = async (id) => {
  const url = `${API.BASE_URL}/${API.LOOKUP_ENDPOINT}/?i=${id}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();    
    console.log(data);
    return data;
  }

  throw Error(404);
};

const randomMeal = async () => {
  const url = `${API.BASE_URL}/${API.RANDOM_ENDPOINT}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();    
    console.log(data);
    return data;
  }

  throw Error(404);
};
export { fetchMeals, fetchMeal, fetchCategories, randomMeal };