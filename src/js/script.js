document.addEventListener('DOMContentLoaded', () => {
    const wave = document.getElementById('waveText');
    /* wave.innerHTML = wave.textContent
        .split('')
        .map((char) => `<span>${char}</span>`)
        .join('');
*/

    const checkbox = document.getElementById("checkbox");
    const logo = document.querySelector(".logo-img");

    const darkLogo = "../img/Cartoonhouse_pink.png"
    const lightLogo = "../img/Cartoonhouse_green.png"

    let savedTheme = localStorage.getItem('teema');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        checkbox.checked = true;
        if (logo) logo.src = darkLogo;
    }   else {
        if (logo) logo.src = lightLogo;
    }

    // let localstoragentila = localStorage.getItem('teema');
    // console.log(localstoragentila);
    // if (localstoragentila === 'dark') {
    // 	document.body.classList.add('dark');
    // 	checkbox.checked = true;
    // }


    if (checkbox) {
        console.log(checkbox);
        checkbox.addEventListener('change', () => {
            const isDark = checkbox.checked;
            document.body.classList.toggle('dark', isDark);
            localStorage.setItem('teema', isDark ? 'dark' : 'light');

            if (logo) logo.src = isDark ? darkLogo : lightLogo;
        });
        window.addEventListener("load", () => {
        document.documentElement.classList.remove("no-transition");
    });
    }
});