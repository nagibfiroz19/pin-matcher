    // for generate pin part

    function getPin() {
        const pin = Math.round(Math.random() * 10000);
        const pinString = pin + '';
        if (pinString.length == 4) {
            return pin;
        } else {
            return getPin();
        }
    }
    function generatePin() {

        document.getElementById('display-pin').value = getPin();
    }

    //for type the correct pin number in display
    document.getElementById('key-pad').addEventListener('click', function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        } else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;

        }
    })
    // Pin verified part
        
    function verifyPin(){
        const pin=document.getElementById('display-pin').value;
        const successMessage=  document.getElementById('notify-success');
        const failMessage=  document.getElementById('notify-failed');
        const typedNumbers=document.getElementById('typed-numbers').value;
        if(pin == typedNumbers){
           successMessage.style.display='block';
           failMessage.style.display='none'; 
        }
        else{
            failMessage.style.display='block';
            successMessage.style.display='none';
        }
    }

    