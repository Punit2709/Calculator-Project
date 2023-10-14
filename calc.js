let content = '';
let numberEntered = document.querySelectorAll('.numBtn');
console.log(numberEntered);
let operationBtn = document.querySelectorAll('.opBtn');
let equal = document.getElementById('equalto');
let clear = document.getElementById('clr');
let displayContent = document.getElementById('screenContent');


const display = function(number){
    // console.log(number);
    // content += number;
    // displayContent.textContent = content;
    // console.log(displayContent.textContent);

}

for (let num of numberEntered) {
    num.addEventListener('click',function(){
        content += num.value;
        // console.log(content);
        displayContent.textContent = content;
    });
}

for(let operation of operationBtn){
    // console.log(operation.value);
    operation.addEventListener('click', function(){
        content = displayContent.textContent;
        
        if(content === '')
            alert('No Input is Given');
        else{
            content += operation.value;
            displayContent.textContent = content;
        }
    });
}

equal.addEventListener('click', function(){
    try {
        const expString = displayContent.textContent;
        const res = eval(expString || null);
        console.log(expString);
        console.log(res);
        displayContent.textContent = res;
    } catch (error) {
        displayContent.textContent = `Can't Calculate`;
    }
});

clear.addEventListener('click',function(){
    content = '';
    displayContent.textContent = content;
});
