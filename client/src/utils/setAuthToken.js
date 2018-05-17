import axios from 'axios';
const setAuthToken = token => {
	if (token) {
		// apply to every request
		axios.defaults.header.common['Authorization'] = token;
	} else {
		// Delete auth Header
		delete axios.defaults.headers.common['Authorization'];
	}
}

export default setAuthToken;