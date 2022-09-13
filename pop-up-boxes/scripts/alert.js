const showAlert = () => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert("Your number is less than 5, Try again!!!")
    }
}