
const bill_amount = document.querySelector('.bill-amount');
const num_of_people = document.querySelector('.num-of-people');

const calculateResult = () => {
    alert("let's calculate"); 
}

const validateForm =()=>{
    const people_err = document.querySelector('.people-err');
    const bill_err = document.querySelector('.bill-err');
   const inputs = document.querySelectorAll('input');
   const errors = document.querySelectorAll('.error');
   let isValid = false; 

    inputs.forEach((input)=> input.classList.remove('invalid'));
    errors.forEach((error)=> error.textContent = '');

    if(bill_amount.value == ''){
        bill_err.textContent = "This field is required";
        bill_amount.classList.add('invalid');
        isValid = true
    }
    if(isNaN(bill_amount.value)){
        bill_err.textContent = "input requires just numbers";
        bill_amount.classList.add('invalid');
        isValid = true
    }
    if(bill_amount.value == 0){
        bill_err.textContent = "Can't be zero";
        bill_amount.classList.add('invalid');
        isValid = true
    }
    if(num_of_people.value == ''){
        people_err.textContent = "This field is required";
        num_of_people.classList.add('invalid');
        isValid = true
    }
    if(isNaN(num_of_people.value)){
        people_err.textContent =  "input requires just numbers";
        num_of_people.classList.add('invalid');
        isValid = true
    }
    if( num_of_people.value == 0){
        people_err.textContent ="Can't be zero";
        num_of_people.classList.add('invalid');
        isValid = true
    }
   
};


document.querySelector('#myform').addEventListener('click', (event)=>{
    event.preventDefault();
    // calculateTip();

    document.querySelector('.btn-1').addEventListener("click", () =>{
        validateForm();
    });
});