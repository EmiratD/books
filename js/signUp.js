window.addEventListener("DOMContentLoaded", () => {
  const newUserName = document.querySelector("#new-userName"),
        newUserPassword = document.querySelector("#new-password"),
        newUserConfirmPassword = document.querySelector("#new-confirm-password"),
        signUp = document.querySelector("#sign-up");

  const url = 'http://localhost:1717';
  
  

  signUp.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    if(newUserPassword.value == newUserConfirmPassword.value){
      const userInfo = {
        username: newUserName.value,
        password: newUserPassword.value,
      };

      const response = await axios.post(url + '/signin', userInfo);
      console.log(response.data.token);
      localStorage.setItem("userInfo", `${response}`);
    } else {
      alert('loh');
    }
  });

});