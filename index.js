


//This way works 

// const input = document.getElementById('button')

// function addingEventListener() {

    
//     return input.addEventListener('click', alert('I was clicked'))

// }





// Or, Stella's way: 

function addingEventListener () {

    return document.getElementById('button').addEventListener('click', () => alert('I was clicked!'))

}

addingEventListener();




// function addingEventListener() {
// }
