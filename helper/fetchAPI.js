import renderData from './render.js';

export default function restAPICall(url, options) {
	fetch(url, options)
		.then(resData => {
			return resData.json();
		})
		.then(data => {
			renderData('result', data instanceof Array ? data[0] : data);
		})
		.catch(err => console.log(err));
}

export function fetchOptions(method, body = {}) {
	function addHeaders() {
		return { headers: { "Content-Type": "application/json" }	}
	}

	function isPassBody(method, body) {
		return Object.assign({}, addHeaders(), { method, body: JSON.stringify(body) });
	}

	function isWithoutBody(method) {
		return Object.assign({}, addHeaders(), { method });
	}

	let options = {
		POST: isPassBody(method, body),
		PUT: isPassBody(method, body),
		PATCH: isPassBody(method, body),
		DELETE: isWithoutBody(method),
		GET: isWithoutBody(method)
	}
	return options[method];
} 

