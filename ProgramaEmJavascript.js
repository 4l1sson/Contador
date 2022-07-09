let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber')

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    if(count>10){


        const a = document.getElementsByTagName("h1")
        console.log(a)
        
        
        
        a[0].style.color = 'green';
        
        
        }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if(count<-10){


        const b = document.getElementsByTagName("h1")
        console.log(b)
        
        
        b[0].style.color = 'blue';
        
       }
 
}
