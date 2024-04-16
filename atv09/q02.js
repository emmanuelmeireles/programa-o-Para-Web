/**Crie um dicionário de alunos onde a chave será o id do aluno e o valor será outro objeto contendo o nome e a nota.
 **Implemente funções para adicionar um novo aluno, buscar um aluno por id e calcular a média das notas dos alunos. */

let alunos = {};

function adicionarAluno(id, nome, nota) {
    alunos[id] = { nome: nome, nota: nota };
}
function buscarAluno(id) {
    return alunos[id];
}
function calcularMedia() {
    let total = 0;
    let count = 0;
    for (let id in alunos) {
        total += alunos[id].nota;
        count++;
    }
    return total / count;
}