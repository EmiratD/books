window.addEventListener("DOMContentLoaded", () => {
  const userName = document.querySelector("#userName"),
    userPassword = document.querySelector("#password"),
    logIn = document.querySelector("#log-in");
    
  const url = "http://localhost:1717";
    
    
  const validInfo = (element) => {
    const info = document.createElement("div");
    info.classList.add("note-valid");
    info.innerHTML = "only a-z and 1-9";
    element.addEventListener("input", (e) => {
      input = element.querySelector("input");
      label = element.querySelector("label");
      value = input.value;
      const valid = /^[a-zA-Z0-9]{0,20}$/g;
      const bool = valid.test(`${value}`);
      if (!bool) {
        input.style =
          "border-bottom: rgba(234, 210, 31, 0.8) solid 2px;color: rgba(234, 210, 31, 0.8);";
        label.style = "color: rgba(234, 210, 31, 0.8);";
        element.appendChild(info);
      } else {
        input.style = " ";
        label.style = " ";
        info.remove();
      }
    });
  };
    
  allInput = document.querySelectorAll(".conteiner-input");
  allInput.forEach((el) => {validInfo(el)});

  logIn.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userInfo = {
      username: userName.value,
      password: userPassword.value,
    };

    const response = await axios.post(url + "/login", userInfo);
    console.log(response.data.token);
    localStorage.setItem("userInfo", `${response.data.token}`);
  });
});
