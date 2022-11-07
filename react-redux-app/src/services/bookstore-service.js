export default class BookstoreService {
  data = [
    {
      id: 1,
      title:
        "Хочу и буду. Принять себя, полюбить жизнь и стать счастливым",
      author: "Михаил Лабковский",
      price: 17.91,
      coverImage:
        "https://s3-goods.ozstatic.by/2000/784/582/10/10582784_0.jpg",
    },
    {
      id: 2,
      title: "Тревожные люди",
      author: "Фредрик Бакман",
      price: 24.38,
      coverImage:
        "https://s5-goods.ozstatic.by/2000/259/965/10/10965259_0.jpg",
    },
    {
      id: 3,
      title: "Sapiens. Краткая история человечества",
      author: "Юваль Харари",
      price: 33.52,
      coverImage:
        "https://s3-goods.ozstatic.by/2000/684/551/10/10551684_0.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
