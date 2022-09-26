//1

// let x = prompt('Введите первое число');
// let y = prompt('Введите второе число');
// let result;
// let outputDiv = document.querySelector('#output');
// if( y != 0 ){
//     result = x / y;
//     outputDiv.innerHTML = `<b>${result}</b>`;
// }else{
//     outputDiv.innerHTML = `<b> Vторое число 0 </b>`;
// }


//2

// while(true){
//     let value = prompt('Введите значения или exit для выхода')
//     if(value == 'exit')
//     break;
//     document.querySelector('#output').innerHTML += value + '<br />';
// }


//3
// let node = document.querySelector('.test');
// node.outerHTML = '<div>hello world</div>'


//4
// let x = prompt('Введите первое число');
// let y = prompt('Введите второе число');
// let result;
// let outputDiv = document.querySelector('#output');

// if( y != 0){
//     result = x / y;
//     outputDiv.textContent = `<b>${result}</b>`;
// }
// else{
//     outputDiv.textContent = `<b> Деление на 0</b>`
// }


//5
// let e = document.querySelector('#elem');
// e.parentElement.style.border = '1px solid red'
// e.parentElement.style.padding = '10px'
// e.previousElementSibling.style.border = '1px solid green'
// e.nextElementSibling.style.border = '1px solid orange'
// for(node of e.children){
//     node.style.border = '1px solid black'
//     node.style.padding = '0px 30px'
// }
// console.log(e.childNodes)


//6
// let element = document.querySelector('#parentOfElements')
// for(elementChild of element.children){
//     elementChild.style.border = '1px solid black'
//     elementChild.style.margin = '20px'
// }
// let elemId = prompt('Введите ID элемента (elem1 , elem2 , elem3)')
// let elem = document.querySelector('#' + elemId);
// for(child of elem.children){
//     child.style.border = '1px solid red'
// }


//7
// let examsScoreColumn = document.querySelectorAll('#statsTable td:nth-child(2)');
// for (const td of examsScoreColumn) {
//     let passedExamIcon = td.nextElementSibling.firstElementChild
//     if(td.textContent > 700){
//         passedExamIcon.hidden = false;
//     } else {
//         passedExamIcon.hidden = true
//     }
// }




// home work
//Задание: Выведите значение переменной input в span расположенный на странице

// let input = prompt('Пишите что хотите');
// let span = document.querySelector('span');
// span.style.border = '1px solid black';
// span.style.padding = '10px';
// span.innerHTML = input;


// Задание: 
// Поправьте сценарий таким образом, чтобы кроме изменения цвета div#color-sample в параграфе под div выводилось сообщение
// Цвет: #000000
// Где #000000 значение, цвета фона элемента div#color-sample



function randomColorSample() {
    let randomColGenerate = '0123456789ABCDEF'
    let color = '#'
    for( i = 0; i < 6; i++){
        color += randomColGenerate[Math.floor(Math.random() * 16)]
    }
    console.log(color)

    let randomCol = document.querySelector('#color-sample');
    randomCol.style.padding = `20px`;
    randomCol.style.background = color;
    randomCol.innerHTML = color;

    let colorInfo = document.querySelector('#color-value');
    colorInfo.innerHTML = color

    return color;
}
randomColorSample()