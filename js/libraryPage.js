window.addEventListener('DOMContentLoaded', async () => {
  const booksList = document.querySelector('#booksList');

  const url = 'http://localhost:1717';
  const token = localStorage.getItem('token');


  const createCardForBook = ({author,name}) => {
    const bookCard = document.createElement('li');
    bookCard.classList.add('bord-books__card');
  
    const bookImg = document.createElement('div');
    bookImg.classList.add('bord-books__card-img')
    const Img = document.createElement('img');
    Img.setAttribute('src', '../../assets/img/book.jpg');
    Img.setAttribute('alt', 'book');
    bookImg.appendChild(Img);
    
    bookCard.appendChild(bookImg);
  
    const bookName = document.createElement('p');
    bookName.classList.add('bord-books__card-book')
    bookName.innerHTML = `${name}`;
    bookCard.appendChild(bookName);
  
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bord-books__card-author')
    bookAuthor.innerHTML = `${author}`;
    bookCard.appendChild(bookAuthor);

    const like = document.createElement('div');
    like.classList.add('bord-books__card-like');
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
  
    booksList.appendChild(bookCard)
  };

  if(token){
    const response = await axios.get(url + "/books", {
      headers: {
          "X-Auth": token
      }
    });
    const books = response.data;

    books.map(el => {
      createCardForBook(el)
    })
  }


})