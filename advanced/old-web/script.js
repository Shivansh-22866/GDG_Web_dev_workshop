let count = 0
let button = document.getElementById('incrementButton');

const updateCount = () => {
    count++;

    document.getElementById('counter1').innerText = `Counter 1: ${count}`;
    document.getElementById('counter2').innerText = `Counter 2: ${count}`;
    document.getElementById('counter3').innerText = `Counter 3: ${count}`;
}


button.onclick = () => {
    updateCount();
}
