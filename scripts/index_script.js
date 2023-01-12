

// #################################################################
// ------------------------Hero Section slider----------------------
// #################################################################

const companyName=document.querySelector('.companyname');
const heroBg=document.querySelector('.herobg');
// Update images in this array
// const arr=['herobg1.jpg','herobg2.jpg','herobg3.jpg','herobg4.jpg'];
const arr=['herobg1.jpg','herobg1.jpg','herobg1.jpg','herobg1.jpg'];
let i=0;
window.setInterval(()=>{
    if(i===arr.length)
        i=0;
    heroBg.style.backgroundImage=`linear-gradient(90deg, rgba(0,0,0,.85) 50%, rgba(255, 255, 255, 0.5) 100%),url("./imgs/${arr[i]}")`
    i++;
},4000);

// ------------------------Features------------------------
// --------------------------------------------------------
const card=document.querySelectorAll('.card');
let bgImgs=[];
for(let j=0;j<card.length;j++){
    bgImgs[j]=card[j].getAttribute('bgImg')
}

window.addEventListener('load', (event) => {
    for(let k=0;k<card.length;k++){
        card[k].style.backgroundImage="linear-gradient(0deg, rgba(0,0,0,1) 19%, rgba(0, 0, 0, 0.1) 100%),url('./imgs/features/"+bgImgs[k]+"')"
    }
  });

$('#open').click(function() {
  $('#modalOverlay').show().addClass('modal-open');
});

$('#close').click(function() {
  var modal = $('#modalOverlay');
  modal.removeClass('modal-open');
  setTimeout(function() {
    modal.hide();
  },200);
});