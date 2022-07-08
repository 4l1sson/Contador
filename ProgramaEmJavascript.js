let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber')

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    if(count>10){


        const a = document.getElementsByTagName("h1")
        console.log(a)
        
        
        // ✅ Change color of first element with class
        a[0].style.color = 'green';
        
        // ✅ Change color of all elements with class
      
        }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if(count<-10){


        const b = document.getElementsByTagName("h1")
        console.log(b)
        
        
        // ✅ Change color of first element with class
        b[0].style.color = 'blue';
        
        // ✅ Change color of all elements with class
    }
 
}
