import axios from 'axios';

export const getUsers = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return result.data;
};
