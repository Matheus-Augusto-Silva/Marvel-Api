import React, {useEffect,useState,useCallback} from 'react';
import api from '../../services/api';
import styles from './characters.module.scss';


interface ResponseData{
  id:string;
  name:string;
  description: string;
  thumbnail:{
    path:string;
    extension:string;
  }
}

const Characters: React.FC= () => {
  const [characters, setCharacters] = useState<ResponseData[]>([])

  useEffect(() => {
    api
    .get('/characters')
    .then(response =>{
      setCharacters(response.data.data.results);
    }).catch(err => console.log(err));
  }, []);

  const handleMore = useCallback(async() => {
    try {
      const offset = characters.length;
      const response = await api.get("characters",{
        params:{
          offset
        },
      });
      setCharacters([...characters,...response.data.data.results])
    } catch (err) {
      console.log(err)
    }
  }, [characters])
  return (
  <div className={styles.container}>
    <section className= {styles.CardList}>
      {characters.map(character => {
          return(
            <section className={styles.card}>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                <h2>{character.name}</h2>
               <p>{character.description}</p>
            </section>
          )
      })}
    </section>
    <div className={styles.continue}>
          <p onClick={handleMore}>Continuar</p>
    </div>
  </div>
  )
  
}
export default Characters;