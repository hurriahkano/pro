let fullName;
let email;
let phoneNumber;
let dob;
let gender;

function fullNameChangehandler(event){
fullName = event.target.value;
}

function emailChangehandler(event){
    email = event.target.value;
}
function phoneNumberChangehandler(event){
    phoneNumber = event.target.value;
    }
    
function dateofBirthChangehandler(event){
    dateofBirth = event.target.value;
    }

function genderChangehandler(event){
        gender = event.target.value;
        }
function onSubmitHandler(event){
    event.preventDefault();
    console.log(fullName, email, phoneNumber, dateofBirth, gender, onsubmit);
}

        