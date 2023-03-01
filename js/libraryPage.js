window.addEventListener("DOMContentLoaded", async () => {
  const booksList = document.querySelector("#booksList");

  const url = "http://localhost:1717";
  const token = localStorage.getItem("token");

  const creatElement = (
    el = "div",
    className = "",
    attr = false,
    attrVal = false,
    attr2 = false,
    attrVal2 = false
  ) => {
    const elem = document.createElement(`${el}`);
    className ? elem.classList.add(`${className}`) : null;
    attr && attrVal ? elem.setAttribute(`${attr}`, `${attrVal}`) : null;
    attr2 && attrVal2 ? elem.setAttribute(`${attr2}`, `${attrVal2}`) : null;
    return elem;
  };

  const showInfoBook = async (id) => {
    const response = await axios.get(url + "/books" + `/${id}`, {
      headers: {
        "X-Auth": token,
      },
    });
    const book = response.data;
    const creatcard = ({
      img,
      name,
      author,
      isFavorite,
      publishYear,
      publishHouse,
      pagesNumber,
      genres,
      originalLanguage,
    }) => {
      const modal = creatElement("div", "modal", "style", "backdrop-filter: blur(5px)");

      const bookImg = creatElement("div", "info-books-card-img");
      const ImgBook = creatElement("img", "", "src", `${img}`, "alt", `${name}`);
      bookImg.appendChild(ImgBook);

      const nameBook = creatElement("div", "info-books-card-text");
      nameBook.innerHTML =`<p>book:</p><p>${name}</p>`;

      const authorName = creatElement("div", "info-books-card-text");
      authorName.innerHTML = `<p>author:</p><p>${author}</p>`;

      const publishYearBook = creatElement("div", "info-books-card-text");
      publishYearBook.innerHTML = `<p>publish year:</p><p>${publishYear}</p>`;

      const publishHouseBook = creatElement("div", "info-books-card-text");
      publishHouseBook.innerHTML = `<p>publish house:</p><p>${publishHouse}</p>`;

      const pagesNumberBook = creatElement("div", "info-books-card-text");
      pagesNumberBook.innerHTML = `<p>pages:</p><p>${pagesNumber}</p>`;

      const genresBook = creatElement("div", "info-books-card-text");
      genresBook.innerHTML = `<p>pages:</p><p>${genres}</p>`;

      const originalLanguageBook = creatElement("div", "info-books-card-text");
      originalLanguageBook.innerHTML = `<p>original language:</p><p>${originalLanguage}</p>`;

      const deleteBtn = creatElement("div", "deleteBtn");
      deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g id="Ikon"><path d="m16 2c-18.498.5857-18.5024 27.4115 0 28 18.4977-.5857 18.5021-27.4116 0-28zm0 26c-15.8552-.502-15.8589-23.4957 0-24 15.8552.502 15.8589 23.4956 0 24zm5.657-16.2432-4.2428 4.2432 4.243 4.2432c.931.9033-.51 2.3453-1.414 1.414l-4.2432-4.2431-4.2429 4.2431c-.9038.9313-2.3449-.5107-1.414-1.414l4.2431-4.2432-4.2429-4.2432c-.9309-.9034.51-2.3452 1.414-1.414l4.2427 4.2431 4.243-4.2431c.9041-.9312 2.3451.5106 1.4142 1.414z" fill="#fff" data-original="#fff" class=""></path></g></g></svg>`;
      deleteBtn.addEventListener('click', () => {
        modal.remove();
      });
      

      const infoBookBlock = creatElement("div", "info-books-card-block",);
      
      const infoBookCard = creatElement("div", "info-books-card");
      infoBookBlock.appendChild(nameBook);
      infoBookBlock.appendChild(authorName);
      infoBookBlock.appendChild(publishYearBook);
      infoBookBlock.appendChild(publishHouseBook);
      infoBookBlock.appendChild(pagesNumberBook);
      infoBookBlock.appendChild(genresBook);
      infoBookBlock.appendChild(originalLanguageBook);
      infoBookBlock.appendChild(deleteBtn);

      infoBookCard.appendChild(bookImg);
      infoBookCard.appendChild(infoBookBlock);

      modal.appendChild(infoBookCard);

      booksList.appendChild(modal);
    };
    console.log(book);
    creatcard(book);
  };

  const showCardForBook = ({ author, name, img, id }) => {
    const bookCard = document.createElement("li");
    bookCard.classList.add("bord-books__card");
    bookCard.setAttribute("tabindex", "0");

    const bookImg = document.createElement("div");
    bookImg.classList.add("bord-books__card-img");
    const Img = document.createElement("img");
    Img.setAttribute("src", `${img}`);
    Img.setAttribute("alt", `${name}`);
    bookImg.appendChild(Img);

    bookCard.appendChild(bookImg);

    const bookName = document.createElement("p");
    bookName.classList.add("bord-books__card-book");
    bookName.innerHTML = `${name}`;
    bookCard.appendChild(bookName);

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bord-books__card-author");
    bookAuthor.innerHTML = `${author}`;
    bookCard.appendChild(bookAuthor);

    const like = document.createElement("div");
    like.classList.add("bord-books__card-like");
    like.innerHTML = `<svg
    width="20"
    height="20"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.1799 11.3912C29.7827 10.4929 29.2099 9.6789 28.4937 8.99471C27.777 8.30848 26.932 7.76314 26.0046 7.38835C25.0429 6.99818 24.0115 6.79846 22.9701 6.8008C21.5092 6.8008 20.0839 7.19154 18.8452 7.92959C18.5489 8.10615 18.2674 8.30007 18.0007 8.51135C17.734 8.30007 17.4525 8.10615 17.1561 7.92959C15.9175 7.19154 14.4921 6.8008 13.0312 6.8008C11.9793 6.8008 10.9599 6.99762 9.9968 7.38835C9.06633 7.76462 8.22771 8.30586 7.50763 8.99471C6.7905 9.67812 6.21764 10.4923 5.82151 11.3912C5.40961 12.3261 5.19922 13.3188 5.19922 14.3405C5.19922 15.3044 5.40072 16.3087 5.80077 17.3304C6.13562 18.1842 6.61568 19.0699 7.22908 19.9642C8.20104 21.3796 9.53749 22.8557 11.1969 24.352C13.9469 26.8325 16.6702 28.5459 16.7857 28.6154L17.488 29.0553C17.7992 29.2493 18.1992 29.2493 18.5104 29.0553L19.2127 28.6154C19.3282 28.543 22.0486 26.8325 24.8015 24.352C26.4609 22.8557 27.7974 21.3796 28.7693 19.9642C29.3827 19.0699 29.8657 18.1842 30.1976 17.3304C30.5977 16.3087 30.7992 15.3044 30.7992 14.3405C30.8021 13.3188 30.5918 12.3261 30.1799 11.3912Z"
        fill="rgb(144, 144, 144)"
        stroke="#fff"
        stroke-width="2"
      />
    </svg>`;
    bookCard.appendChild(like);

    bookCard.addEventListener("click", () => {
      showInfoBook(id);
    });

    booksList.appendChild(bookCard);
  };

  if (token) {
    const response = await axios.get(url + "/books", {
      headers: {
        "X-Auth": token,
      },
    });
    const books = response.data;

    books.map((el) => {
      showCardForBook(el);
    });
  }
});
