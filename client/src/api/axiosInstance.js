import axios from 'axios';
import { BASE } from './endpoints';

export default axios.create({ baseURL: BASE, timeout: 15_000 });
