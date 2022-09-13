const askSomething = () => {
    const decision = confirm('Are you coming to the picnic?');
    console.log(decision);
    if(decision === true){
        alert('Send your trip fare through bkash!');
    }
    else{
        alert('Hope to have you on board next time!');
    }
}