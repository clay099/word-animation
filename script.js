const loader = document.querySelector(".loader");
const toggleButton = document.querySelector("#togglePlayState");

// const sentence = "Animation Play State";
const sentence = "CSS & JS Animation";

function addSentenceToPage(sentence) {
	[...sentence].forEach((char, i) => {
		const span = document.createElement("span");
		const spanText = document.createTextNode(char);
		span.appendChild(spanText);
		span.style.setProperty("--i", i);
		loader.appendChild(span);
	});
}

// give button text to start
const buttonText = document.createTextNode("pause play state");
toggleButton.appendChild(buttonText);

// toggle text & classes
function togglePlayStat() {
	const classes = toggleButton.className;
	if (classes.includes("playState")) {
		toggleButton.classList.remove("playState");
		removeChildren(toggleButton);
		addText(toggleButton, "pause play state");
		runningPlayState(loader);
	} else {
		toggleButton.classList.add("playState");
		removeChildren(toggleButton);
		addText(toggleButton, "start play state");
		pausePlayState(loader);
	}
}

function addText(node, text) {
	const buttonText = document.createTextNode(text);
	node.appendChild(buttonText);
}

function runningPlayState(node) {
	let childNodes = node.childNodes;
	for (let child of childNodes) {
		if (child.nodeName !== "#text") {
			child.style.animationPlayState = "running";
		}
	}
}

function pausePlayState(node) {
	const childNodes = node.childNodes;
	for (let child of childNodes) {
		if (child.nodeName !== "#text") {
			child.style.animationPlayState = "paused";
		}
	}
}

// removes children nodes - used for button to remove text nodes
function removeChildren(node) {
	let childNodes = node.childNodes;
	for (let child of childNodes) {
		node.removeChild(child);
	}
}

toggleButton.addEventListener("click", togglePlayStat);

window.onload = addSentenceToPage(sentence);
