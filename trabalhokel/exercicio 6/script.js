document.getElementById('changeColors').addEventListener('click', function() {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');

    div1.classList.remove('red');
    div1.classList.add('blue');

    div2.classList.remove('green');
    div2.classList.add('red');

    div3.classList.remove('blue');
    div3.classList.add('green');
});
