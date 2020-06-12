const monthly = [...document.querySelectorAll('.monthly')];
const annually = [...document.querySelectorAll('.annually')];
const checkbox = document.querySelector('#checkbox');

function switchPrice () {
    if (checkbox.checked) {
       for (let month of monthly) {
           month.style.display = "block";
       }
       for (let year of annually) {
           year.style.display = "none";
       }
    } else {
        for (let month of monthly) {
            month.style.display = "none";
        }
        for (let year of annually) {
            year.style.display = "block";
        }
    }
}

checkbox.addEventListener('click', switchPrice);