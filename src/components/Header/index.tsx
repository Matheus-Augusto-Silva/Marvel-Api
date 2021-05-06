import React from 'react'
import styles from './styles.module.scss'

export default function Header(){
return(

  <header className={styles.container}>
      <h1>marvelApi</h1>
      <p>Fique por dentro do Universo Marvel sabendo tudo <br/> sobre os personagens dessa grande produtora! </p>
      <img src="./avengers.png" alt="Avengers"/>
  </header>

);
}