import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import '@/styles/spectre.css'
import '@/styles/spectre-exp.css'
import '@/styles/spectre-icons.css'
import '@/styles/yeo.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>BanckNet</title>
      <meta name="description" content="BanckNet" />
    </Head>

    <div className="yeo-slogan">
      <div className="container yeo-header">
        <div className="columns">
          <div className="column col-12">
            <header className="navbar">
              <section className="navbar-section">
                <a className="navbar-brand logo" href="#">
                  <img alt="logo" className="logo-img" src="/images/logo.png" />
                  <span></span>
                </a>
              </section>
              <section className="navbar-section hide-sm">
                <a className="btn btn-link" href="#we-do">inicio</a>
                
                <a className="btn btn-link" href="#team">Nosotros</a>
                <a className="btn btn-primary btn-hire-me" href="#">Abrir cuenta</a>
                <a className="btn btn-primary btn-hire-me" href="#">Banca por internet</a>
              </section>
            </header>
          </div>
        </div>
      </div>

      <div className="container slogan">
        <div className="columns">
          <div className="column col-7 col-sm-12">
            <div className="slogan-content">
              <h1>
                <span className="slogan-bold">Disfruta del invierno con una tarjeta de ahorros</span>
              </h1>
              <p>Pidela 100 % digital desde la app web</p>
              <a className="btn btn-primary btn-lg btn-start" href="#y" target="_blank">Crear cuenta</a>
            </div>
          </div>
          <div className="column col-5 hide-sm">
            <img alt="" className="slogan-img" src="/images/yeo-feature-1.svg" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="yeo-client">
      <div className="container yeo-client-list">
        <div className="columns">
          <div className="column col-12">
            <h3 className="feature-title">
                Confiado por los mejores clientes
            </h3>
              <div className="client-logo">

                <a href="#" target="_blank">
                  <img alt="" height="40px" src="/images/algolia.svg"/>
                  </a>
                <a href="#" target="_blank">
                  <img alt="" height="40px" src="/images/lapa-logo.svg"/>
                  </a>
                <a href="#" target="_blank">
                  <img alt="" height="40px" src="/images/hugo.svg"/>
                  </a>
                <a href="#" target="_blank">
                  <img alt="" height="40px" src="/images/codecademy.svg"/>
                  </a>
                <a href="#" target="_blank">
                  <img alt="" height="40px" src="/images/aws.svg"/>
                  </a>
                <a href="#" target="_blank">
                  <img alt="" height="40px" src="/images/stripe.svg"/>
                  </a>
                  
              </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="yeo-footer">
      <div className="container">
        <div className="columns">
          <div className="column col-3 col-sm-6">
            <div className="yeo-footer-content">
              <h4>© 2025 BankNet</h4>
              <ul className="nav">
                <li className="nav-item">
                  <a>Todos los derechos reservados. Sede central,  156</a>
                  </li>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
    
  )
}