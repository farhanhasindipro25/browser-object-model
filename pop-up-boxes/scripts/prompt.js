const getUserInfo = () => {
  const name = prompt("Enter your name.");
  console.log(name);
  if (!!name) {
    alert("Welcome Aboard", name);
  }
};
