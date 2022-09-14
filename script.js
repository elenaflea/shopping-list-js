const inputList = document.querySelector('.inputFolder');
const btn = document.querySelector('.btnplus');
const list =document.querySelector('.list');

btn.addEventListener ('click', ()=> {
    const item = document.createElement('li');
    item.innerText = inputList.value;

    if(inputList.value.length === 0) {
        return false;
    }

    item.classList.add ('listCreated');
    list.appendChild(item);
    inputList.value ='';
    item.addEventListener('click', ()=>{
        item.classList.add ('listCompleted');
    });
    item.addEventListener('dblclick', ()=>{
        list.removeChild(item);
    })
})