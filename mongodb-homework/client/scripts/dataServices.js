// const baseURL = ""; // Write down the base URL of the created API.

// const getAllUser = async () => {};

// const createUser = async (userData) => {};

// const deleteUser = async (id) => {};

// export { getAllUser, deleteUser, createUser };

const API_URL = 'http://localhost:5000/member'; 

const getAllUser = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
};


const createUser = async (user) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  }
};


const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return response.ok; 
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error; 
  }
};

module.exports = {
  getAllUser,
  createUser,
  deleteUser,
};