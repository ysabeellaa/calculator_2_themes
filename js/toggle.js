const botaoToggle = document.getElementById("ckb");
const body = document.querySelector('body');


botaoToggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    botaoToggle.classList.toggle('light');

})

// function changeTheme(isDark) {
//     if(isDark){
//         document.body.style.setProperty('--background-color', '#323232');
//         document.body.style.setProperty('--font-color', '#e1e1e1');
//         localStorage.setItem('data-theme', 'dark');

//     }else{
//         document.body.style.setProperty('--background-color', '#e1e1e1');
//         document.body.style.setProperty('--font-color', '#323232');
//         localStorage.setItem('data-theme', 'light');

//     }

// }