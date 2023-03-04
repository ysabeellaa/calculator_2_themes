const botaoToggle = document.getElementById("toggle");
var isDark = localStorage.getItem("data-theme") == 'dark';

isDark ? botaoToggle.classList.toggle('dark'): null;
changeTheme(isDark);

botaoToggle.addEventListener('click', () =>{
    botaoToggle.classList.toggle('dark');
    isDark = toggle.classList.value == 'dark';
    changeTheme(isDark);
})

function changeTheme(isDark) {
    if(isDark){
        document.body.style.setProperty('--background-color', '#323232');
        document.body.style.setProperty('--font-color', '#e1e1e1');
        localStorage.setItem('data-theme', 'dark');

    }else{
        document.body.style.setProperty('--background-color', '#e1e1e1');
        document.body.style.setProperty('--font-color', '#323232');
        localStorage.setItem('data-theme', 'light');

    }

}