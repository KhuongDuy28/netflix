import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hnetflix } from './ts/header'
import { NetflixBody1, NetflixBody2, NetflixBody3, NetflixBody4, NetflixBody5, NetflixBody6, NetflixBody7, NetflixBody8, NetflixBody9, NetflixBody10 } from './ts/body'
import { FooterNetflix } from './ts/footer'


export default function HomeNetflix() {
    return (
        <div>
            <div className='header-netflix'>
                <Hnetflix/>
            </div>
            <div className='body1-netflix'>
                <NetflixBody1/>
                <NetflixBody2/>
                <NetflixBody3/>
                <NetflixBody4/>
                <NetflixBody5/>
            </div>
            <div className='body2-netflix'>
                <NetflixBody6/>
                <NetflixBody7/>
                <NetflixBody8/>
                <NetflixBody9/>
                <NetflixBody10/>
            </div>
            <div className='footer-netflix'>
                <FooterNetflix/>
            </div>
            
        </div>
    )
}