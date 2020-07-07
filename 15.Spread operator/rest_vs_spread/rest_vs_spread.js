function afficherArguments(...nombres) {
  console.log(nombres);
}

const tb = ['pomme', 'banane', 'ananas'];
const tb2 = [...tb];

const maFamille = ['Christian', 'Emma', 'Denis'];

//spread
const maFamilleComplete = [...maFamille, 'Sarah'];
const maFamilleFake = [maFamille, 'Toto'];

//autres : rest
const [moi, ...autres] = maFamille;

const famille = { nom: 'Lisangola', pays: 'RD Congo', ville: 'Kinshasa' };

//Spread
const familleSuite = { ...famille, ageMax: 90 };

const { nom, ...rest } = famille;




const Composant=(props)=>{
    return <>
        { props.users.map(user=><Liste key={user.id} {...user} />) }
    </>
}
