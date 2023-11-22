// pages/projetos.js
import React from 'react';

const ProjetoCard = ({ title, description, image, link }) => (
  <article className="card">
    <p>{description}</p>
    <img src={`img/${image}`} alt={`Imagem do projeto ${title}`} />
    <a href={link}>Link do Artigo</a>
  </article>
);

const Projetos = () => {
  return (
    <div>


      <main>
        <h1>Projetos desenvolvidos no laboratório</h1>

        <section className="projetos">
          <ProjetoCard
            title="Desenvolvimento de um jogo sério controlado por dispositivo wearable para exercícios de dorsiflexão e flexão Plantar"
            description="Desenvolvimento de um jogo sério controlado por dispositivo wearable para exercícios de dorsiflexão e flexão Plantar"
            image="papete.png"
            link="https://www.researchgate.net/profile/Bruno-Da-Silva-Rodrigues/publication/345753664_Desenvolvimento_de_um_Jogo_Serio_Controlado_por_Dispositivo_Wearable_para_Exercicios_de_Dorsiflexao_e_Flexao_Plantar/links/5faefafc299bf10c367c4510/Desenvolvimento-de-um-Jogo-Serio-Controlado-por-Dispositivo-Wearable-para-Exercicios-de-Dorsiflexao-e-Flexao-Plantar.pdf"
          />

          <ProjetoCard
            title="Desenvolvimento de um jogo sério integrado a um dispositivo skateboard para treinamento de equilíbrio postural"
            description="Desenvolvimento de um jogo sério integrado a um dispositivo skateboard para treinamento de equilíbrio postural"
            image="snowboard_game.png"
            link="https://www.conic-semesp.org.br/anais/files/2022/trabalho-1000009080.pdf"
          />
        </section>
      </main>


    </div>
  );
};

export default Projetos;
