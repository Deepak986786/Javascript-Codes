
//Case 1 : Without Optimization
// let textField = document.querySelector('#search');
// textField.addEventListener('input', () => {
//     console.count("search action without optimization!!")
// })

/**
 * Case 2 : With Optimization using Debouncing Method
 */

const debounce=(delaytime) => {

    let timerid;
    
    if(timerid)clearTimeout(timerid);

    // return function(){

    //     clearTimeout(timerid);
    //     timerid = setTimeout(() =>console.count("debounce called"),delaytime);
    //     console.log("inside debounce");

    // } 
    
    
    timerid=setTimeout(() =>console.count("debounce called"),delaytime);

}

function handleSearchInput(){
    debounce(1000);
    console.log("calling debounced")
}


let textField = document.querySelector('#search');
textField.addEventListener('input', handleSearchInput);
