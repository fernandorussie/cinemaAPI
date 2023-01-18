import React from 'react';
import Head from '../../components/Head'
// import { Container } from './styles';
import './styles.css'

function Home() {
  return (
    <div className='container-home'>
        <Head title="Home"/>
        <a className='logo' href='https://github.com/fernandorussie/cinemaAPI' target="_blank">
          <p>
            CineArt
          </p>
        </a>
        <p>
          Site de filmes e series
        </p>
    </div>
  );
}

export default Home;