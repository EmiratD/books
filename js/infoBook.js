import creatElement from "./createEl.js";

const showInfoBook = async (url, token, id, bord) => {
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
    const modal = creatElement(
      "div",
      "modal",
      "style",
      "background: rgba(0, 0, 0, 0.8)"
    );

    const bookImg = creatElement("div", "info-books-card-img");
    const ImgBook = creatElement("img", "", "src", `${img}`, "alt", `${name}`);
    bookImg.appendChild(ImgBook);

    const nameBook = creatElement("div", "info-books-card-text");
    nameBook.innerHTML = `<p>book:</p><p>${name}</p>`;

    const authorName = creatElement("div", "info-books-card-text");
    authorName.innerHTML = `<p>author:</p><p>${author}</p>`;

    const publishYearBook = creatElement("div", "info-books-card-text");
    publishYearBook.innerHTML = `<p>publish year:</p><p>${publishYear}</p>`;

    const publishHouseBook = creatElement("div", "info-books-card-text");
    publishHouseBook.innerHTML = `<p>publish house:</p><p>${publishHouse}</p>`;

    const pagesNumberBook = creatElement("div", "info-books-card-text");
    pagesNumberBook.innerHTML = `<p>pages:</p><p>${pagesNumber}</p>`;

    const genresBook = creatElement("div", "info-books-card-text");
    genresBook.innerHTML = `<p>genres:</p><p>${genres}</p>`;

    const originalLanguageBook = creatElement("div", "info-books-card-text");
    originalLanguageBook.innerHTML = `<p>original language:</p><p>${originalLanguage}</p>`;

    const deleteBtn = creatElement("div", "deleteBtn");
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g id="Ikon"><path d="m16 2c-18.498.5857-18.5024 27.4115 0 28 18.4977-.5857 18.5021-27.4116 0-28zm0 26c-15.8552-.502-15.8589-23.4957 0-24 15.8552.502 15.8589 23.4956 0 24zm5.657-16.2432-4.2428 4.2432 4.243 4.2432c.931.9033-.51 2.3453-1.414 1.414l-4.2432-4.2431-4.2429 4.2431c-.9038.9313-2.3449-.5107-1.414-1.414l4.2431-4.2432-4.2429-4.2432c-.9309-.9034.51-2.3452 1.414-1.414l4.2427 4.2431 4.243-4.2431c.9041-.9312 2.3451.5106 1.4142 1.414z" fill="#fff" data-original="#fff" class=""></path></g></g></svg>`;
    deleteBtn.addEventListener("click", () => {
      modal.remove();
    });

    const infoBookBlock = creatElement("div", "info-books-card-block");

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

    bord.appendChild(modal);
  };
  creatcard(book);
};

export default showInfoBook;