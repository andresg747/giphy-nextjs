import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/gifs.module.css'

const Gifs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Just one time
    fetch('/api/gifs/pokemon')
      .then(response => response.json())
      .then(respObj => setData(respObj))
      .then(json => console.log(json))
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gifs</h2>
      <div className={styles.list}>
        {data.map(item => (
          <div className={styles.listItem} key={item.title}>
            <span>{item.title}</span>
            <Image src={item.url} alt={item.title} width="200" height="100" layout="responsive" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gifs;