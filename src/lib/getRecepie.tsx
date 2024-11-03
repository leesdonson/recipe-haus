//get all recepies

const getRecepies = async (limit: number, skip: number, pageCount: number) => {
  const str = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&page=${pageCount}`;
  const url = new URL(str);
  const request = new Request(url);
  try {
    const apiResponse = await fetch(request);
    if (!apiResponse.ok) {
      const err: any = await apiResponse.json();
      throw new Error(err.message);
    }

    return await apiResponse.json();
  } catch (error) {
    console.log(error);
  }
};
const searchRecipes = async () => {
  const str = `https://dummyjson.com/recipes?limit=10`;
  const url = new URL(str);
  const request = new Request(url);
  try {
    const apiResponse = await fetch(request);
    if (!apiResponse.ok) {
      const err: any = await apiResponse.json();
      throw new Error(err.message);
    }

    return await apiResponse.json();
  } catch (error) {
    console.log(error);
  }
};

//get single recepie

const getRecepie = async (id: number) => {
  const str = `https://dummyjson.com/recipes/${id}`;
  const url = new URL(str);
  const request = new Request(url);
  try {
    const apiResponse = await fetch(request);
    if (!apiResponse.ok) {
      const error: any = await apiResponse.json();
      throw new Error(error.message);
    }
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getRecepies, getRecepie, searchRecipes };
