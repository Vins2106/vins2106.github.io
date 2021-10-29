let navST = getDocById("st");
let navH = getDocById("h");
let navSM = getDocById("sm");
let lPG = getDocById("loading-pg");

window.onload = () => {
	setTimeout(() => {
		addClassTo(lPG, ["loaded"]);
	}, 1000)
}
function showRemoveLoading(time) {
	removeClassFrom(lPG, ["loaded"]);

	setTimeout(() => {
		addClassTo(lPG, ["loaded"]);
	}, time)
}

let navList = [
	{
		name: "skills-tools",
		nav: navST
	},
	{
		name: "home",
		nav: navH
	},
	{
		name: "social-media",
		nav: navSM
	}
]

function navigateTo(id) {
	let navToPage = getDocById(id);
	if (!navToPage) return console.log("cannot find the page")


	let current = getDocsByClass("active-page");
	if (!current) return console.log("cannot find current page");
	showRemoveLoading(1000);

	let currentPg = current[0];

	removeClassFrom(currentPg, ["active-page"]);

	setTimeout(() => {
		document.title = `Vincent Saerang - ${id}`;

		addClassTo(navToPage, ["active-page"]);
	}, 500)

	removeClassFrom(navST, ["active"])
	removeClassFrom(navH, ["active"])
	removeClassFrom(navSM, ["active"])

	let targetActive = navList.find(x => x.name === id);


	addClassTo(targetActive.nav, ["active"])	
}

function copyEmail(e) {
	navigator.clipboard.writeText("vins25165@gmail.com")
	alert("copied")
}

function openLink(link = []) {
	link.forEach(l => {
		window.open(l, "_blank")
	})
}