// document.addEventListener("DOMcontentloaded", () => {
    // document.addEventListener("DOMcontentloaded", function() {
    let counter = document.querySelector('#counter');

        let timer = setInterval(function() {
            counter.innerText++;
        }, 1000);
       
    let pauseButton = document.getElementById("pause")
    let plusButton = document.getElementById("plus")
    let heartButton = document.getElementById("heart")
    let minusButton = document.getElementById("minus")
    let likes = document.querySelector(".likes")

    let comments = document.querySelector("#list")
    let submitButton = document.querySelector("#submit")

        

        
     minusButton.addEventListener('click', function(e) {
        counter.innerText--;
     });

     plusButton.addEventListener('click', function(e) {
         counter.innerText++;
     });
        
        // let clicks = 0;
        // function click() {
            //     clicks += 1;
            //     document.getElementById('heart').innerHTML = clicks;
            // };
            
            pauseButton.addEventListener('click', function(e) {
                if (pauseButton.innerText === "pause") {
                    pauseButton.innerText = "resume"
                    clearInterval(timer)
                    
                    plusButton.disabled = true;
                    minusButton.disabled = true;
                    heartButton.disabled = true;
                    submitButton.disabled = true;
                }
                else {
                    timer = setInterval(function() {
                        counter.innerText++;
                    }, 1000);
                    pauseButton.innerText = "pause";
                    
                    plusButton.disabled = false;
                    minusButton.disabled = false;
                    heartButton.disabled = false;
                    submitButton.disabled = false;
                }
                
            });
            
            heartButton.addEventListener('click', function(e) {
                let obj = document.getElementById(`${counter.innerText}`);
                obj ? obj.children[0].innerText++:
                likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
                
            });
            
                
                submitButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    let comment = document.querySelector('#comment-form > input[type=text]').value
                    comments.innerHTML += `<li>${comment}</li>`
                    document.querySelector('#comment-form').reset() 
                });
            // });              
// });