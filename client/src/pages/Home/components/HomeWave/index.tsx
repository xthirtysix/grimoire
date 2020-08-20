import React from 'react'
//Style
import s from '../../styles/HomeWave.module.scss'
//Assets
import wave1 from './assets/1.png'
import wave2 from './assets/2.png'
import wave3 from './assets/3.png'

export const HomeWave = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.wave}></div>
        <div className={s.line1}>
          <div
            className={s.wave1}
            style={{ backgroundImage: `url(${wave1})` }}
          />
        </div>
        <div className={s.line2}>
          <div
            className={s.wave2}
            style={{ backgroundImage: `url(${wave2})` }}
          />
        </div>
        <div className={s.line3}>
          <div
            className={s.wave3}
            style={{ backgroundImage: `url(${wave3})` }}
          />
        </div>
      </div>
    </>
  )
}
