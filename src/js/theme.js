const savedTheme = localStorage.getItem("teema");
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}