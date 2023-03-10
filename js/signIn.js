window.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = "../page/books/index.html";
  } else {
    const userName = document.querySelector("#userName"),
      userPassword = document.querySelector("#password"),
      logIn = document.querySelector("#log-in");

    const url = "http://localhost:1717";

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
          element.appendChild(info);
        } else {
          input.style = "";
          label.style = "";
          info.remove();
        }
      });
    };

    allInput = document.querySelectorAll(".conteiner-input");
    allInput.forEach((el) => {
      validInfo(el);
    });

    logIn.addEventListener("submit", async (e) => {
      e.preventDefault();

      const userInfo = {
        username: userName.value,
        password: userPassword.value,
      };

      try {
        const response = await axios.post(url + "/login", userInfo);
        localStorage.setItem("token", `${response.data.token}`);
        window.location.href = "../page/books/index.html";
      } catch (error) {
        console.log(error);
      }
    });
  }
});
