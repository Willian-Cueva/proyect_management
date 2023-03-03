import React from 'react'
import styles from "./styles/ImageBMPN.module.css"

export default function ImageBPMN({src,alt="Se debe definir el alt"}) {
  return (
    <div className={styles.imageContainer}>
        <h5 className='text-mute'>Diagrama BPMN</h5>
        <img src={src} alt={alt} className={`${styles.imagen} ${styles.imagenP} ${styles.blinkingShadow}`}/>
    </div>
  )
}
