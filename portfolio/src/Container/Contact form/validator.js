export function validatorFun(email,number){
    const emailValidation=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const numberValidation=/^\d{10}$/.test(number);

    if(!emailValidation) return "Enter A Valid Email"
    if(!numberValidation) return "Enter a Valid Number"

    return null;
}