function DarkMode() {
    var theme = document.body;
    theme.classList.toggle("dark-mode", true);
	theme.classList.toggle("light-mode", false);
	localStorage.setItem("preferredmode", "dark");
}
function LightMode() {
    var theme = document.body;
    theme.classList.toggle("light-mode", true);
	theme.classList.toggle("dark-mode", false);
	localStorage.setItem("preferredmode", "light");
}
function RememberTheme() {
	var x = localStorage.getItem("preferredmode");
    if (x === "dark") {
        document.body.classList.toggle("dark-mode", true);
    }
}
window.onload = function() {
    RememberTheme(); 
};
