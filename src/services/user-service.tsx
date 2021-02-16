import axios from 'axios';
import { User } from '../models/user';

export const getUsers = async () => {
  const result = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return result.data;
};
