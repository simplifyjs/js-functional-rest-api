import { getEl } from "./utils.js";

export default function renderData(element, data) {
	getEl(element).textContent = JSON.stringify(data);
}
