const createBook = async () => {
  const img = document.querySelector("#book-img").value,
        name = document.querySelector("#book-name").value,
        author = document.querySelector("#book-author").value,
        isFavorite = document.querySelector("#book-isFavorite").value,
        publishYear = document.querySelector("#book-publishYear").value,
        publishHouse = document.querySelector("#book-publishHouse").value,
        pagesNumber = document.querySelector("#book-pagesNumber").value,
        genres = document.querySelector("#book-genres").value,
        originalLanguage = document.querySelector("#book-originalLanguage").value;

  const newBook = {
    img,
    name,
    author,
    isFavorite,
    publishYear,
    publishHouse,
    pagesNumber,
    genres,
    originalLanguage,
  };

  await axios.post(url + "/books/create", newBook);
};

// const imgBlok = document.querySelector('#bookImg');
// const img = document.querySelector("#book-img");

// img.addEventListener( 'input', async (e) => {
//   const url = e.target.value;
//   const status = (await fetch(e.target.value)).status;
  
//   if(status ==  404){
//     imgBlok.setAttribute(`src`, `/assets/img/skinBook.jpg`);
//     imgBlok.setAttribute(`alt`, `обложка`);
//   } else {
//     if(e.target.value !== ''){
//       imgBlok.setAttribute(`src`, `${url}`);
//       imgBlok.setAttribute(`alt`, `обложка`);
//     } else {
//       imgBlok.setAttribute(`src`, `/assets/img/skinBook.jpg`);
//       imgBlok.setAttribute(`alt`, `обложка`);
//     }
//   }
// })

const imgInputHelper = document.getElementById("add-single-img");
const imgInputHelperLabel = document.getElementById("add-img-label");
const imgContainer = document.querySelector(".custom__image-container");
const imgFiles = [];

const addImgHandler = () => {
  const file = imgInputHelper.files[0];
  if (!file) return;
  // Generate img preview
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const newImg = document.createElement("img");
    newImg.src = reader.result;
    imgContainer.insertBefore(newImg, imgInputHelperLabel);
  };
  // Store img file
  // imgFiles.push(file);
  // Reset image input
  imgInputHelper.value = "";
  return;
};
imgInputHelper.addEventListener("change", addImgHandler);

// const getImgFileList = (imgFiles) => {
//   const imgFilesHelper = new DataTransfer();
//   imgFiles.forEach((imgFile) => imgFilesHelper.items.add(imgFile));
//   return imgFilesHelper.files;
// };

// const customFormSubmitHandler = (ev) => {
//   ev.preventDefault();
//   const firstImgInput = document.getElementById("image-input");
//   firstImgInput.files = getImgFileList(imgFiles);
//   // submit form to server, etc
// };
document
  .querySelector(".custom__form")
  .addEventListener("submit", customFormSubmitHandler);

