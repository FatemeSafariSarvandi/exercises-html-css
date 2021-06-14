let activeStandard = document.getElementById('activeStandard');
let standard = document.getElementById('standard');
let deActiveStandard = document.getElementById('deActiveStandard');
let history = document.getElementById('history');
let memory = document.getElementById('memory');
let T_history = document.getElementById('T_history');
let T_memory = document.getElementById('T_memory');
let historyPage = document.getElementById('historyPage');
let I_history = document.getElementById('I_history');
let is = true;
activeStandard.onclick = () => {
    standard.style.left = '0';
};
deActiveStandard.onclick = () => {
    standard.style.left = '-100%';
};
history.onclick = () => {
    T_history.style.display = 'block';
    T_memory.style.display = 'none';
};
memory.onclick = () => {
    T_history.style.display = 'none';
    T_memory.style.display = 'block';
};
I_history.onclick = () => {
    if (is) {
        historyPage.style.display = 'block';
    } else {
        historyPage.style.display = 'none';
    }
    is = !is;
};
