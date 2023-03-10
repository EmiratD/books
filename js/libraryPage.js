import searchBook from "./search.js";
import showCardForBook from "./showCardForBook.js";

window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:1717";
  const token = localStorage.getItem("token");

  const bordBooks = document.querySelector("#bord-books");

  const exit = document.querySelector(".btn-exit");

  exit.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "../../index.html";
  });


  if (token) {
    const response = await axios.get(url + "/books", {
      headers: {
        "X-Auth": token,
      },
    });
    const books = response.data;

    books.map((el) => {
      showCardForBook(el, bordBooks, url, token);
    });

    const searchForm = document.querySelector("#search");

    searchForm.addEventListener("input", (e) => {
      searchBook(books, bordBooks, e, url, token);
    });
  }
});
