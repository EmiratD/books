import showCardForBook from "./showCardForBook.js";

const searchBook = function (data, bord, event, url, token) {
  const valueSelect = event.target.value.toLowerCase();
  let arrRes = [];

  if (valueSelect !== "") {
    data.forEach((el) => {
      if (el.name.toLowerCase().search(valueSelect) !== -1) {
        arrRes.push(el);
      } else {
        return null;
      }
    });
  } else {
    arrRes = data;
  }
  bord.innerHTML = '';
  arrRes.map(el => {
    showCardForBook(el,bord, url, token);
  })
};


export default searchBook;

