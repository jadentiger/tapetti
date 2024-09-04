const colorBox1 = document.getElementById('color1');
const colorBox2 = document.getElementById('color2');
const colorSelect1 = document.getElementById('colorSelect1');
const colorSelect2 = document.getElementById('colorSelect2');

function updateColors() {
    const color1 = colorSelect1.value;
    const color2 = colorSelect2.value;

    colorBox1.style.backgroundColor = color1;
    colorBox1.textContent = colorSelect1.options[colorSelect1.selectedIndex].text;

    colorBox2.style.backgroundColor = color2;
    colorBox2.textContent = colorSelect2.options[colorSelect2.selectedIndex].text;
}

colorSelect1.addEventListener('change', updateColors);
colorSelect2.addEventListener('change', updateColors);

updateColors();