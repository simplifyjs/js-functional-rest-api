import { getEl } from './helper/utils.js';
import restAPICall, { fetchOptions } from './helper/fetchAPI.js';
import getEndPoint, { getEndPointPerPage } from './helper/endpoint.js';

let nameVal;

window.getNameVal = function getNameVal(val) {
	nameVal =  {name: val};
};

function eventListenerCheck(element, event, callback) {
	return "addEventListener" in window || 
		Element.prototype.addEventListener ?
			element.addEventListener(event, callback):
			('attachEvent') ?
			element.attachEvent("on" + event, callback):
			element["on" + event] = callback;
}

const eventHandler = (method) => e => {
	(method === 'POST') ?  
	restAPICall(getEndPoint(), fetchOptions(method, nameVal)) :
	restAPICall(getEndPointPerPage(), fetchOptions(method, nameVal))
}

eventListenerCheck(getEl('getBtn'), 'click', eventHandler('GET'));
eventListenerCheck(getEl('postBtn'), 'click', eventHandler('POST'));
eventListenerCheck(getEl('putBtn'), 'click', eventHandler('PUT'));
eventListenerCheck(getEl('patchBtn'), 'click', eventHandler('PATCH'));
eventListenerCheck(getEl('deleteBtn'), 'click', eventHandler('DELETE'));



