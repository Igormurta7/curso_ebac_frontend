class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

const aluno1 = new Aluno("Igor", 10);
const aluno2 = new Aluno("Alice", 9);
const aluno3 = new Aluno("Maria", 8);
const aluno4 = new Aluno("Carlos", 6);
const aluno5 = new Aluno("Ana", 5);
const aluno6 = new Aluno("Beto", 4);

const turma = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

const alunosAprovados = turma.filter(function (aluno) {
  return aluno.nota >= 6;
});

console.log(alunosAprovados);
