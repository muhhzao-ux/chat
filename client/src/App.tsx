
import { useState } from "react";
import {
  Radio,
  Users,
  MessageCircle,
  MonitorPlay,
  Plus,
  ArrowRight,
  Lock,
  Globe,
  Sparkles,
} from "lucide-react";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  if (window.location.pathname === "/privacidade") {
    return <PrivacyPolicy />;
  }

  return (
    <main className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <Radio size={23} />
          </div>
          <span>chat<span className="cyan">.</span></span>
        </div>

        <div className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#recursos">Recursos</a>
          <a href="#salas">Salas</a>
        </div>

        <button className="login-button" onClick={() => setShowLogin(true)}>
          Entrar <ArrowRight size={16} />
        </button>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="announcement">
            <Sparkles size={15} />
            SEU NOVO LUGAR NA INTERNET
          </div>

          <h1>
            A internet fica
            <br />
            melhor <span>juntos.</span>
          </h1>

          <p>
            Crie salas, encontre seus amigos, converse e
            compartilhe momentos. Tudo em um só lugar.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={() => setShowLogin(true)}>
              Começar agora <ArrowRight size={18} />
            </button>

            <button className="secondary-button" onClick={() => setShowLogin(true)}>
              Fazer login
            </button>
          </div>

          <div className="features">
            <span><Users size={16} /> Comunidade</span>
            <span><MessageCircle size={16} /> Chat ao vivo</span>
            <span><MonitorPlay size={16} /> Watch party</span>
          </div>
        </div>

        <div className="preview" id="salas">
          <div className="preview-top">
            <div className="window-dots"><i /><i /><i /></div>
            <span>CHAT / SALAS</span>
            <span className="online"><i /> ONLINE</span>
          </div>

          <div className="preview-body">
            <aside className="preview-sidebar">
              <div className="mini-logo"><Radio /></div>
              <div className="side-item active"><Users /></div>
              <div className="side-item"><MessageCircle /></div>
              <div className="side-item"><MonitorPlay /></div>
              <div className="side-item"><Plus /></div>
            </aside>

            <div className="preview-main">
              <div className="preview-heading">
                <div>
                  <small>COMUNIDADE</small>
                  <h3>Suas salas</h3>
                </div>
                <button><Plus size={15} /> Criar sala</button>
              </div>

              <div className="room-card">
                <div className="room-icon cyan-bg"><MonitorPlay /></div>
                <div><strong>Resenha da noite</strong><small>Uma sala para conversar</small></div>
                <span className="room-online">● 4</span>
              </div>

              <div className="room-card">
                <div className="room-icon blue-bg"><MessageCircle /></div>
                <div><strong>Resenha geral</strong><small>Conversa com a galera</small></div>
                <span className="room-online">● 8</span>
              </div>

              <div className="room-card">
                <div className="room-icon green-bg"><Lock /></div>
                <div><strong>Sala privada</strong><small>Apenas convidados</small></div>
                <span className="room-online">● 2</span>
              </div>

              <div className="preview-footer">
                <Globe size={14} /> Um espaço feito para você.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-section" id="recursos">
        <div>
          <span className="section-tag">TUDO EM UM LUGAR</span>
          <h2>Seu espaço. Sua galera.</h2>
        </div>
        <div className="bottom-cards">
          <article><Users /><h3>Salas</h3><p>Crie espaços para reunir seus amigos.</p></article>
          <article><MessageCircle /><h3>Chat</h3><p>Converse em tempo real.</p></article>
          <article><MonitorPlay /><h3>Compartilhe</h3><p>Momentos para aproveitar juntos.</p></article>
        </div>
      </section>

      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div
            className="login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" aria-label="Fechar" onClick={() => setShowLogin(false)}>×</button>
            <div className="logo-icon modal-icon"><Radio /></div>
            <h2 id="login-modal-title">Bem-vindo ao Chat</h2>
            <p>O cadastro ainda não está disponível. Não informe dados pessoais nesta versão.</p>
            <button className="primary-button" onClick={() => setShowLogin(false)}>Entendi</button>
          </div>
        </div>
      )}

      <footer>
        <span>© 2026 Chat — Feito para conectar pessoas.</span>
        <a href="/privacidade">Política de privacidade</a>
      </footer>
    </main>
  );
}

export default App;
