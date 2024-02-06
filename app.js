const incrementBtn = document.querySelector('.inc'),
      decrementBtn = document.querySelector('.dec'),
      counter = document.querySelector('.count');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    count > 10
    ? counter.style.color = 'yellow'
    : counter.style.color = '#000'
    counter.textContent = count < 10 ? `0${count}` : count;
})

decrementBtn.addEventListener("click", () => {
    count--;
    count < 10
      ? (counter.style.color = "#000")
      : (null);
    if(count <= 0) {
      count = 1;
    }
    counter.textContent = count < 10 ? `0${count}` : count;
});
