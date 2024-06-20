<template>
  <div class="bg-[#16161a] rounded p-20 text-white text-center">
    <h1 class="text-6xl font-bold">Mes Experiences</h1>

    <h2 class="text-2xl p-8">
      Les competences que jai acquis durant mes experiences professionnelles
    </h2>
  </div>

  <div class="exp">
    <div class="persentation mb-8 text-white flex flex-col gap-8">
      <img
        class=""
        src="@/assets/img/experience/GONEXA/Logo rectangle négatif.png"
        alt="logo de GONEXA"
      />
      <h3 class="text-4xl">TYPE : STAGE </h3>
      <h3 class="text-4xl">POSTE : Developpeur Fullstack</h3>
      <h4>Du 15/04/2024 au 5/07/2024</h4>
      <p></p>
    </div>

    <div class="exp-competences text-white grid grid-cols-3 gap-4">
      <div class="exp-competence">
        <h4>Competence : Réalisation d’application</h4>
        <h5>
          C'est avec la maitise de plusieurs lanages tel que Java et le C qui m'ont aider a
          apprendre d'autre langages utilisé par l'entreprise.
        </h5>
      </div>
      <div class="exp-competence">
        <h4>Competences : Optimisation des applications informatiques</h4>
        <h5>-</h5>
      </div>
      <div class="exp-competence">
        <h4>Competence : Gérer des données de l’informations</h4>
        <h5>
          Dans ce stage je me suis retouve confronté a des bases de données afin de realiser un
          projet
        </h5>
      </div>
      <div class="exp-competence">
        <h4>Competence : Travailler dans une équipe informatique</h4>
        <h5>
          C'est avec ce stage que j'ai pu voir le trvail de plusieurs developpeur dans des projets.
          De plus, je me suis retrouvé avec un autre stagiaire sur le meme projet, j'ai pu
          experimenter le travail dans une equipe informatique.
        </h5>
      </div>
      <div class="exp-competence">
        <h4>Competence : Administrer des systèmes informatiques communicants complexes</h4>
        <h5>-</h5>
      </div>
      <div class="exp-competence">
        <h4>Competence : Conduire un projet</h4>
        <h5>J'ai pu mettre en pratique la methode agile suivi dans ma formtion</h5>
      </div>
    </div>

    <hr class="h-1 w-3/4 m-12" />
    <h3 class="text-white font-bold text-4xl mb-12">Projet</h3>
    <div class="exp-projet grid grid-cols-3 gap-4">
      <img
        class=""
        src="@/assets/img/experience/GONEXA/page_statistiques.png"
        alt="capture d'ecran de la page des statistiques"
      />
      <img
        class=""
        src="@/assets/img/experience/GONEXA/page_liste_comptes.png"
        alt="capture d'ecran de la page des statistiques"
      />
      <img
        class=""
        src="@/assets/img/experience/GONEXA/page_compte_client.png"
        alt="capture d'ecran de la page des statistiques"
      />
    </div>
  </div>
</template>

<style scoped>
.exp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  padding: 2rem;
  margin: 2rem;
  border: 2px solid #03212f;
  background-color: #03212f;
  border-radius: 0.5rem;
}

.exp-competence h4 {
  font-size: 1.25rem;
  font-weight: bold;
}

.exp-competence {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  border: 0.5rem solid #cab2b2;
}

.exp-projet img {
  width: 100%;
  height: 100%;
}
</style>
