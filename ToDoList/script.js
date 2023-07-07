const inputField = document.getElementById('input-text');
const confirmBtn = document.getElementById('confirm-btn');
const deleteBtn = document.getElementById('delete-btn');
const elemsList = document.getElementById('list');

confirmBtn.onclick = () => {
    let newElem = document.createElement('li');
    if(inputField !== ''){
        newElem.innerHTML = inputField.value;
        elemsList.appendChild(newElem);
    }
    inputField.value = '';

    let newElemEditBtn = document.createElement('button');
    newElemEditBtn.innerHTML = 'Edit';
    newElem.appendChild(newElemEditBtn);
    newElemEditBtn.style.marginLeft = '4px';
    newElemEditBtn.style.padding = '3px 8px';
    newElemEditBtn.style.border = 'none';
    newElemEditBtn.style.background = '#33C16C'
    newElemEditBtn.style.color = 'white';
    newElemEditBtn.style.cursor = 'pointer';
    newElemEditBtn.onclick = () => {
        let newList = elemsList.getElementsByTagName('li');
        for(let i = 0; i < newList.length; i++){
            let li = newList[i];

            let editInput = document.createElement('input');
            editInput.type = 'text';

            li.textContent = '';
            li.appendChild(editInput);

            editInput.addEventListener('keydown', function(event){
                if(event.key === 'Enter'){
                    let li = this.parentNode;
                    let inputValue = this.value.trim();

                    if(inputValue !== ''){
                        li.textContent = inputValue;
                    } else {
                        li.parentNode.removeChild(li)
                    }
                }
            })
        }


    }

    let newElemDeleteBtn = document.createElement('button');
    newElemDeleteBtn.innerHTML = 'X';
    newElem.appendChild(newElemDeleteBtn);
    newElemDeleteBtn.style.marginLeft = '4px';
    newElemDeleteBtn.style.padding = '3px 8px';
    newElemDeleteBtn.style.border = 'none';
    newElemDeleteBtn.style.background = '#ED5E68'
    newElemDeleteBtn.style.color = 'white';
    newElemDeleteBtn.style.cursor = 'pointer';
    newElemDeleteBtn.onclick = (event) => {
        newElem.remove();
    }



} // При клике на кнопку okay из содержимого инпута создается новый элемент li в ul и выводится внизу //

