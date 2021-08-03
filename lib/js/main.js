const button=document.getElementById('submit_button')
button.addEventListener('click',clickListener)


function clickListener(event){
    event.preventDefault;
    let noun=document.getElementById('noun').value;
    let verb=document.getElementById('verb').value;
    let adjective=document.getElementById('adjective').value;
    if(noun==false||verb==false||adjective==false){
        alert('fill it in man')
    }
    else{
        let sentence= `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
        document.getElementById('story_result').innerText=sentence;
    }
    /*const inputElement=document.getElementById('title_input')
    const userInput=inputElement.value;
    console.log(userInput)
    inputElement.value='';*/

}

const titleInput=document.querySelector('#title_input')
titleInput.addEventListener('input', newTitle)
function newTitle(event){
    event.preventDefault();
    const inputElement= document.getElementById('title_input')
    const userInput= inputElement.value
    document.getElementById('main_title').innerText=userInput;
    
}

