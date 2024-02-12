import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, eu sou Matheus</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper neque diam, at vehicula lectus vestibulum sit amet. Integer varius nulla eu hendrerit gravida. Proin maximus lacus eget commodo varius.
                </p>
                <a
                    href='mailto:ms.portes.lima@gmail.com'
                    className={styles.contactBtn}
                >
                    Entre em contato
                </a>
            </div>
            <img
                src={getImageUrl('hero/heroImage.png')}
                alt='Hero image of me'
                className={styles.heroImage}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}