function Animal(classe, especie, alimentacao) {
  this.classe = classe;
  this.especie = especie;
  this.alimentacao = alimentacao;
}

function Pet(classe, especie, alimentacao, sexo) {
  Animal.call(this, classe, especie, alimentacao);

  this.sexo = sexo;
}

function Zoo(classe, especie, alimentacao, selvagem) {
  Animal.call(this, classe, especie, alimentacao);

  this.selvagem = selvagem;
}

const animal1 = new Animal("mamífero", "cachorro", "carnívoro");
const animal2 = new Pet("mamífero", "gato", "carnívoro", "macho");
const animal3 = new Zoo("réptil", "sucuri", "onívoro", true);
