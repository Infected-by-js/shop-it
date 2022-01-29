import axios from 'axios';
import { ENDPOINTS } from './endpoints';

export default axios.create({
	baseURL: ENDPOINTS.base,
});
