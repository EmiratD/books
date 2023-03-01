window.addEventListener("DOMContentLoaded", () => {
  const newUserName = document.querySelector("#new-userName"),
        newUserPassword = document.querySelector("#new-password"),
        newUserConfirmPassword = document.querySelector("#new-confirm-password"),
        newUserFirstName = document.querySelector("#userFirstName"),
        newUserAge = document.querySelector("#userAge"),
        signUp = document.querySelector("#sign-up");

  const url = 'http://localhost:1717';
  
  // const vlidNum = /^[1-9]${0,20}/g;

  const validInfo = (element) => {
    const info = document.createElement("div");
    info.classList.add("note-valid");
    info.innerHTML = 'Only letters from "A-z" and numbers "0-9" can be used.';
    element.addEventListener("input", (e) => {
      input = element.querySelector("input");
      label = element.querySelector("label");
      value = input.value;
      const valid = /^[a-zA-Z0-9]{0,20}$/g;
      const bool = valid.test(`${value}`);
      if (!bool) {
        input.style =
          "border-bottom: rgb(202, 156, 72) solid 2px;color: rgb(202, 156, 72);";
        label.style = "color: rgb(202, 156, 72);";
        signUp.appendChild(info);
      } else {
        input.style = "";
        label.style = "";
        info.remove();
      };

    });
  };
    
  allInput = document.querySelectorAll(".conteiner-input");
  allInput.forEach((el) => {validInfo(el)});


  signUp.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    if(newUserPassword.value == newUserConfirmPassword.value){
      const userInfo = {
        username: newUserName.value,
        password: newUserPassword.value,
        firstName: newUserFirstName.value,
        age: newUserAge.value,
      };
      await axios.post(url + '/signin', userInfo);
    } else {
      newUserPassword.style = 'border-bottom: red solid 2px;color: red;';
      newUserConfirmPassword.style = 'border-bottom: red solid 2px;color: red;';
    }
  });

});