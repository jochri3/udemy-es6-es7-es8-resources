const requete = (URL) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, noms: 'Christian Lisangola' },
          { id: 2, noms: 'Jean-Paul Jojo' },
        ],
        '/users/1/posts': [
          { id: 1, title: 'C++', content: 'Bon langage' },
          { id: 2, title: 'Javascript', content: 'Excellent Langage' },
        ],
        '/posts/2/comments': [
          { content: 'Je ne le pense pas' },
          { content: 'EN effet JS est très bon' },
        ],
        '/posts/1/comments': [{ content: "C'est vrai" }],
      };

      if (pages[URL]) {
        resolve({
          status: 200,
          data: pages[URL],
        });
      } else {
        reject({
          status: 404,
          message: 'not found',
        });
      }
    }, 1000);
  });
};

requete('/users')
  .then((res) => {
    const userId = res.data[0].id;
    return requete(`/users/${userId}/posts`);
  })
  .then((res) => {
    const postId = res.data[1].id;
    return requete(`/posts/${postId}/comments`);
  })
  .then((res) => console.log(res));
