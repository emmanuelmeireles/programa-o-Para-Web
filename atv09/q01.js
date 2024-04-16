/**Crie uma lista de alunos onde cada aluno será representado por um objeto contendo id, nome e nota.
 **Implemente funções para adicionar um novo aluno, buscar um aluno por id e calcular a média das notas dos alunos */
 
let alunos = [
    { id: 1, nome: 'João', nota: 8.5 },
    { id: 2, nome: 'Maria', nota: 9.2 },
    { id: 3, nome: 'Pedro', nota: 7.3 },
    
];

function adicionarAluno(id, nome, nota) {
    alunos.push({ id, nome, nota });
}

function buscarAlunoPorId(id) {
    return alunos.find(aluno => aluno.id === id);
}

function calcularMediaDasNotas() {
    let somaDasNotas = alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
    return somaDasNotas / alunos.length;
}