const Form = document.querySelector("form");
// console.log(Form);

const Email = Form.querySelector("#email");
const Password = Form.querySelector("#password");

// console.log(Password);

Form.addEventListener("submit", FormHandler)

function FormHandler(e) {
    
    e.preventDefault();
    // console.log(e);
    
    const formInfo ={
        YourEmail:Email.value,
        Password : Password.value,    
    }

    Email.value= "";
    Password.value= "";
         
    console.log(formInfo);
    
}