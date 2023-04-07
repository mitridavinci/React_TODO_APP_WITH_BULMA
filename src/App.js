import React,{useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import Header from './Composants/Header/Header';
import Formulaire from './Composants/Form/Formulaire';
import Card from './Composants/Card/Card';

function App() {

  const [monState, setMonState] = useState([
    {
      tache: 'Promener le chien',
      txt:"Une fois a 8h Une fois a 19H",
    },
    {
      tache: 'Preparer le repas',
      txt:"Acheter du poisson plus riz",
    },
    {
      tache: 'Crée une app Web ',
      txt:"Apprendre React"
    }
  ])
  
  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();

  function creationCarte(e) {
    e.preventDefault();
    // console.log(tache, txt);

    const nvTab = [...monState,{tache:tache, txt:txt}];

    setMonState(nvTab);
    console.log(nvTab);

    setTache('');
    setTxt('');
  }

  function supprCarte(index) {
    
    const tabNettoyage = [...monState];
    // console.log(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])));
    
    setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])));
  }

  return (
    <div>
      <Header />
      <Formulaire addTask={setTache} addTxt={setTxt} addForm={ creationCarte} rmTask={tache} rmTxt={txt} />
      {
        monState.map((todo, index) => (
          <Card
            key={index}
            index={index}
            tache={todo.tache}
            txt={todo.txt}
            supprFunc ={supprCarte}
          />
        ))
      }
     
    </div>
  );
}

export default App;
