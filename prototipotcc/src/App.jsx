import { useState } from "react";

import {
  FileText,
  Upload,
  Search,
  CheckCircle,
  Users,
  Home,
  FileArchive,
  Globe,
  ShieldCheck,
  Clock
} from "lucide-react";

import "./App.css";

/* NAVBAR */

function Navbar(){
  return(
    <header className="navbar">
      <div className="container nav">

        <h2 className="logo">
          <ShieldCheck size={20}/> Cartório Digital
        </h2>

        <nav>
          <a>Serviços</a>
          <a>Certidões</a>
          <a>Consulta</a>
          <a>Ajuda</a>
        </nav>

      </div>
    </header>
  )
}

/* HERO */

function Hero(){

  const [search,setSearch] = useState("");

  return(

    <section className="hero">

      <div className="container hero-content">

        <div>

          <h1>
            Serviços de Cartório<br/>
            100% Digitais
          </h1>

          <p>
            Solicite certidões e registre documentos online.
          </p>

          <div className="hero-buttons">

            <button className="btn">
              Solicitar Certidão
            </button>

            <button className="btn-outline">
              Enviar Documento
            </button>

          </div>

        </div>

        <div className="card protocolo">

          <h3>Consultar Protocolo</h3>

          <input
            placeholder="Número do protocolo"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

          <button className="btn">
            <Search size={16}/> Consultar
          </button>

        </div>

      </div>

    </section>

  )

}

/* AÇÕES */

function QuickActions(){

  return(

    <section className="container cards3">

      <div className="card">
        <Upload/>
        <h3>Enviar Documento</h3>
        <p>Envie documentos para autenticação.</p>
        <button className="btn">Enviar</button>
      </div>

      <div className="card">
        <FileText/>
        <h3>Solicitar Certidão</h3>
        <p>Certidões de nascimento, casamento ou óbito.</p>
        <button className="btn">Solicitar</button>
      </div>

      <div className="card">
        <Search/>
        <h3>Consultar Registro</h3>
        <p>Consulte registros e documentos.</p>
        <button className="btn">Consultar</button>
      </div>

    </section>

  )

}

/* SERVIÇOS */

function Services(){

  return(

    <section className="container services">

      <h2 className="section-title">
        Serviços do Cartório
      </h2>

      <div className="cards2">

        <div className="card">

          <h3><Users/> Registro Civil</h3>

          <ul>
            <li>Nascimento</li>
            <li>Casamento</li>
            <li>Óbito</li>
            <li>2ª via de certidões</li>
          </ul>

        </div>

        <div className="card">

          <h3><Home/> Registro de Imóveis</h3>

          <ul>
            <li>Matrícula</li>
            <li>Compra e venda</li>
            <li>Transferência</li>
            <li>Certidões</li>
          </ul>

        </div>

        <div className="card">

          <h3><FileArchive/> Pessoa Jurídica</h3>

          <ul>
            <li>Registro de documentos</li>
            <li>Associações</li>
            <li>Alterações societárias</li>
          </ul>

        </div>

        <div className="card">

          <h3><Globe/> Serviços Online</h3>

          <ul>
            <li>Certidões digitais</li>
            <li>Consulta de bens</li>
            <li>Consulta de protestos</li>
          </ul>

        </div>

      </div>

    </section>

  )

}

/* BENEFÍCIOS */

function Benefits(){

  return(

    <section className="container benefits cards3">

      <div className="card">
        <Clock/>
        <h3>Atendimento Rápido</h3>
        <p>Processos digitais.</p>
      </div>

      <div className="card">
        <ShieldCheck/>
        <h3>Segurança Jurídica</h3>
        <p>Conforme legislação.</p>
      </div>

      <div className="card">
        <Globe/>
        <h3>100% Online</h3>
        <p>Acesso de qualquer lugar.</p>
      </div>

    </section>

  )

}

/* STATUS */

function Status(){

  return(

    <section className="container card status">

      <div>
        <h3>Status do Sistema</h3>
        <p>Serviços operando normalmente</p>
      </div>

      <div className="online">
        <CheckCircle/> Online
      </div>

    </section>

  )

}

/* FOOTER */

function Footer(){

  return(

    <footer className="footer">

      <div className="container footer-content">

        <span>© 2026 Cartório Digital</span>

        <span>Portal de serviços notariais</span>

      </div>

    </footer>

  )

}

/* APP */

export default function App(){

  return(

    <>

      <Navbar/>

      <Hero/>

      <QuickActions/>

      <Services/>

      <Benefits/>

      <Status/>

      <Footer/>

    </>

  )

}