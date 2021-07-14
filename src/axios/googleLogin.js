import axios from 'axios';
import { useHistory } from 'react-router-dom';

const googleLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			access_token: accesstoken,
			backend: 'google',
			grant_type:'password&username=USR&password=PASS',
			client_id: '398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com',
			client_secret:
				'p_-GDvLoQPpM0fYhiKZwATJp',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
    return accesstoken;
};

export default googleLogin;