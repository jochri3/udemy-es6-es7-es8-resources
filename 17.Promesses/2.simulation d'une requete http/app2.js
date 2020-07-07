const requete = (URL) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, noms: 'Christian Lisangola' },
          { id: 2, noms: 'Jean-Paul Jojo' },
        ],
        '/users/1': { id: 1, noms: 'Christian Lisangola' },
        '/users/2': { id: 2, noms: 'Jean-Paul Jojo' },
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
    }, 4000);
  });
};

console.log('Premier');
//Erreur
requete('/toto')
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// Code 200
requete('/users')
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
  
console.log('Deuxieme');
