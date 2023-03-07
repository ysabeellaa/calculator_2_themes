const botaoToggle = document.getElementById("ckb");
const body = document.querySelector('body');
const localStorageKey = "modo-escuro";

// Verifica se há um valor armazenado no localStorage para o modo escuro
if (localStorage.getItem(localStorageKey) === "true") {
  body.classList.add("dark");
  botaoToggle.checked = true;
}

botaoToggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    botaoToggle.classList.toggle('light');

    // Armazena o estado atual do botão no localStorage
    localStorage.setItem(localStorageKey, botaoToggle.checked);
})
