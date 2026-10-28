import { ArrowLeft, Radio } from "lucide-react";

function PrivacyPolicy() {
  return (
    <main className="app">
      <article className="privacy-page">
        <header className="privacy-header">
          <a className="logo" href="/" aria-label="Chat — página inicial">
            <span className="logo-icon"><Radio size={21} /></span>
            <span>chat<span className="cyan">.</span></span>
          </a>
          <a className="privacy-back" href="/">
            <ArrowLeft size={15} aria-hidden="true" /> Voltar ao início
          </a>
        </header>

        <div className="privacy-content">
          <span className="section-tag">TRANSPARÊNCIA E PRIVACIDADE</span>
          <h1>Política de privacidade</h1>
          <p className="privacy-updated">Última atualização: 28 de outubro de 2026</p>

          <div className="privacy-notice">
            <p>
              <strong>Estado atual:</strong> o Chat é um protótipo de interface.
              Cadastro, login, salas e mensagens ainda não estão conectados a um
              servidor. Não digite senhas, dados pessoais ou informações
              confidenciais nesta versão.
            </p>
          </div>

          <h2>1. Quem somos e a quem se aplica</h2>
          <p>
            Esta política descreve o funcionamento atual do site Chat e deverá
            ser revisada antes da abertura de contas ou da disponibilização de
            recursos online. Ela não substitui os termos e avisos dos serviços
            de hospedagem utilizados para publicar o site.
          </p>

          <h2>2. Dados tratados pelo site</h2>
          <p>
            Na versão atual, a aplicação não oferece formulários de cadastro ou
            login, não envia mensagens a um serviço remoto e não grava dados de
            perfil ou conversas no navegador. Os botões de acesso apenas exibem
            um aviso. Portanto, não use esse protótipo para compartilhar dados
            reais.
          </p>
          <p>
            A infraestrutura que hospeda ou entrega o site pode registrar dados
            técnicos de acesso, como endereço IP, data e hora, navegador e
            informações de diagnóstico. Esses registros são administrados pelo
            provedor de hospedagem conforme os termos e a política dele; o
            provedor ainda não foi definido neste projeto.
          </p>

          <h2>3. Finalidade, armazenamento e compartilhamento</h2>
          <p>
            Como as funções de conta e chat não estão implementadas, o Chat não
            usa dados de cadastro ou mensagens para personalização, publicidade
            ou análise. O site não integra atualmente serviços de analytics,
            pixels de publicidade ou fontes externas. Eventuais registros
            técnicos da hospedagem ficam sujeitos aos prazos e controles do
            respectivo provedor.
          </p>

          <h2>4. Cookies e armazenamento no navegador</h2>
          <p>
            A aplicação atual não cria cookies nem usa armazenamento local ou
            de sessão para guardar informações pessoais. O navegador e a
            infraestrutura de hospedagem podem utilizar mecanismos técnicos
            próprios, descritos nas políticas dos respectivos fornecedores.
          </p>

          <h2>5. Segurança</h2>
          <p>
            O site inclui políticas de segurança para o navegador, como
            restrição de conteúdo carregado, bloqueio de incorporação em outros
            sites e limitação de recursos do dispositivo. Essas medidas reduzem
            alguns riscos, mas não garantem segurança absoluta e não protegem
            dados inseridos em serviços de terceiros.
          </p>
          <p>
            Não há atualmente contas, banco de dados ou canal de mensagens
            implementado. Antes de ativar essas funções, será necessário
            publicar uma política atualizada e implementar controles de
            servidor, acesso, transporte, retenção e resposta a incidentes.
          </p>

          <h2>6. Seus direitos e contato</h2>
          <p>
            Quando houver tratamento de dados pessoais, solicitações relativas
            a esses dados deverão ser encaminhadas ao responsável pelo projeto.
            O responsável e seu canal de contato ainda precisam ser identificados
            e publicados antes do lançamento de recursos que coletem dados.
          </p>

          <h2>7. Alterações nesta política</h2>
          <p>
            Esta página será atualizada quando novas funções ou fornecedores
            alterarem o tratamento de dados. Consulte-a novamente antes de usar
            futuras funções de cadastro, chat ou compartilhamento.
          </p>

          <footer className="privacy-footer">
            Esta é uma política inicial do protótipo; não representa garantia de
            conformidade jurídica nem substitui uma revisão profissional antes
            do lançamento.
          </footer>
        </div>
      </article>
    </main>
  );
}

export default PrivacyPolicy;
