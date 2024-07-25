let boxes = document.getElementsByClassName('box');
let dragData = document.querySelector('.dragData');

dragData.addEventListener('dragstart', (e) => {
    // console.log(e);
})
dragData.addEventListener('dragend', (e) =>{
    // console.log(e);
})

for(let index = 0; index <= boxes.length -1; index++){
    boxes[index].addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    boxes[index].addEventListener('drop' , () =>{
        boxes[index].appendChild(dragData)
    });
}