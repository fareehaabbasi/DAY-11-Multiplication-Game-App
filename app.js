const score = document.getElementById('score');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const input = document.getElementById('input');
const btn = document.getElementById('btn');


let count = 0;
btn.addEventListener('click', () => {
    let val = input.value;
    val = val.trim();
    val = Number(val);
    if (input.value === '') {
        Swal.fire({
            icon: "error",
            text: "You need to enter a value",
        });
    } else if (val === num1.textContent * num2.textContent) {
        count++;
        score.textContent = count;
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
        input.value = '';
    } else {
        alert('Wrong answer. Try again!');
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
        input.value = '';
    }
})