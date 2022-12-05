const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');

add.addEventListener('click', () => {
  count.innerHTML++;
  if(count>0 && count<=1000){
    applyColor();
  }
});

sub.addEventListener('click', () => {
  count.innerHTML--;
  if(count>0 && count<=1000){
    applyColor();
  }
});

reset.addEventListener('click', () => {
  count.innerHTML = 0;
  if(count>0 && count<=1000){
    applyColor();
  }
});

function applyColor() {
    if (count.innerHTML > 0) {
      count.style.color = 'green';
    } else if (count.innerHTML < 0) {
      count.style.color = 'orangered';
      return
    } else {
      count.style.color = 'black';
    }
  
}
