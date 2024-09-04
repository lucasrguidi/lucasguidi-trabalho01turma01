const GerenciadorDeTarefas = require("../src/Trabalho01Turma01");

let gerenciadorDeTarefas;

beforeEach(() => {
  gerenciadorDeTarefas = new GerenciadorDeTarefas();
});

test("Validando adição de tarefa com descrição válida", async () => {
  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);

  expect(gerenciadorDeTarefas.listarTarefas()).toContainEqual(tarefa);
});

test("Validando adição de tarefa com descrição inválida", async () => {
  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "123",
  };

  expect(() => {
    gerenciadorDeTarefas.adicionarTarefa(tarefa);
  }).toThrow();
});

test("Validando remoção de tarefa", async () => {
  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);
  expect(gerenciadorDeTarefas.listarTarefas()).toContainEqual(tarefa);

  gerenciadorDeTarefas.removerTarefa(1);
  expect(gerenciadorDeTarefas.listarTarefas()).not.toContainEqual(tarefa);
});

test("Validando buscar tarefa por id", async () => {
  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(1)).toEqual(tarefa);
});

test("Validando buscar tarefa por id inexistente", async () => {
  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(2)).toEqual(undefined);
});

test("Validando atualizar tarefa ", async () => {
  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);
  expect(gerenciadorDeTarefas.listarTarefas()).toContainEqual(tarefa);

  const tarefaAtualizada = {
    id: 1,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
  };

  gerenciadorDeTarefas.atualizarTarefa(1, tarefaAtualizada);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(1)).toEqual(tarefaAtualizada);
});

test("Validando listagem de tarefas ", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);

  expect(gerenciadorDeTarefas.listarTarefas()).toEqual([
    tarefa1,
    tarefa2,
    tarefa3,
  ]);
});

test("Validando contagem de tarefas ", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);

  expect(gerenciadorDeTarefas.contarTarefas()).toEqual(3);
});

test("Validando marcar tarefa como concluída ", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: false,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.marcarTarefaComoConcluida(1);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).concluida).toEqual(true);
});

test("Validando listagem de tarefas concluídas", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: true,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    concluida: false,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    concluida: true,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    concluida: true,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  expect(gerenciadorDeTarefas.listarTarefasConcluidas()).toEqual([
    tarefa1,
    tarefa3,
    tarefa4,
  ]);
});

test("Validando listagem de tarefas pendentes", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: true,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    concluida: false,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    concluida: true,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    concluida: true,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  expect(gerenciadorDeTarefas.listarTarefasPendentes()).toEqual([tarefa2]);
});

test("Validando remoção de tarefas concluídas", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: true,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    concluida: false,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    concluida: true,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    concluida: true,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  gerenciadorDeTarefas.removerTarefasConcluidas();

  expect(gerenciadorDeTarefas.listarTarefas()).toEqual([tarefa2]);
});

test("Validando buscar tarefa por descrição", async () => {
  const desc = "Estudar para a prova";

  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: desc,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);

  expect(gerenciadorDeTarefas.buscarTarefaPorDescricao(desc)).toEqual([tarefa]);
});

test("Validando adicionar tag a tarefa ", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: false,
  };

  const tag = "escola";

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTagATarefa(1, tag);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).tags).toEqual([tag]);
});

test("Validando remover tag da tarefa ", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: false,
  };

  const tag = "escola";

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTagATarefa(1, tag);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).tags).toEqual([tag]);

  gerenciadorDeTarefas.removerTagDaTarefa(1, tag);
  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).tags).toEqual([]);
});

test("Validando listagem de tarefas por tag", async () => {
  const tag1 = "tag 1";
  const tag2 = "tag 2";

  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: true,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    concluida: false,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    concluida: true,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    concluida: true,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  gerenciadorDeTarefas.adicionarTagATarefa(1, tag1);
  gerenciadorDeTarefas.adicionarTagATarefa(2, tag1);
  gerenciadorDeTarefas.adicionarTagATarefa(3, tag2);
  gerenciadorDeTarefas.adicionarTagATarefa(4, tag2);

  expect(gerenciadorDeTarefas.listarTarefasPorTag(tag1)).toEqual([
    tarefa1,
    tarefa2,
  ]);
});

test("Validando buscar tarefa por data", async () => {
  const data = "2003-06-05";

  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    data,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);

  expect(gerenciadorDeTarefas.buscarTarefasPorData(data)).toContainEqual(
    tarefa
  );
});

test("Validando atualizar prioridade", async () => {
  const prioridadeAlta = "Alta";
  const prioridadeMedia = "Media";
  const prioridadeBaixa = "Baixa";

  const tarefa = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    prioridade: prioridadeAlta,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa);
  gerenciadorDeTarefas.atualizarPrioridade(1, prioridadeMedia);

  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).prioridade).toEqual(
    prioridadeMedia
  );
});

test("Validando listar tarefas por prioridade", async () => {
  const prioridadeAlta = "Alta";
  const prioridadeMedia = "Media";
  const prioridadeBaixa = "Baixa";

  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    prioridade: prioridadeAlta,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    prioridade: prioridadeMedia,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    prioridade: prioridadeBaixa,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    prioridade: prioridadeAlta,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  expect(
    gerenciadorDeTarefas.listarTarefasPorPrioridade(prioridadeAlta)
  ).toEqual([tarefa1, tarefa4]);
});

test("Validando contar tarefas por prioridade", async () => {
  const prioridadeAlta = "Alta";
  const prioridadeMedia = "Media";
  const prioridadeBaixa = "Baixa";

  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    prioridade: prioridadeAlta,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    prioridade: prioridadeMedia,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    prioridade: prioridadeBaixa,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    prioridade: prioridadeAlta,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  expect(
    gerenciadorDeTarefas.contarTarefasPorPrioridade(prioridadeAlta)
  ).toEqual(2);
});

test("Validando marcar todas as tarefas como concluídas", async () => {
  const prioridadeAlta = "Alta";
  const prioridadeMedia = "Media";
  const prioridadeBaixa = "Baixa";

  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    prioridade: prioridadeAlta,
    concluida: false,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    prioridade: prioridadeMedia,
    concluida: false,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    prioridade: prioridadeBaixa,
    concluida: false,
  };

  const tarefa4 = {
    id: 4,
    titulo: "Tigre",
    descricao: "Tigreeeeeeee",
    prioridade: prioridadeAlta,
    concluida: false,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);
  gerenciadorDeTarefas.adicionarTarefa(tarefa4);

  gerenciadorDeTarefas.marcarTodasComoConcluidas();

  const tarefas = gerenciadorDeTarefas.listarTarefas();
  const concluidas = tarefas.every((tarefa) => tarefa.concluida);

  expect(concluidas).toBe(true);
});

test("Validando reabrir tarefa ", async () => {
  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    concluida: false,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.marcarTarefaComoConcluida(1);
  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).concluida).toEqual(true);

  gerenciadorDeTarefas.reabrirTarefa(1);
  expect(gerenciadorDeTarefas.buscarTarefaPorId(1).concluida).toEqual(false);
});

test("Validando ordenar tarefas por data", async () => {
  const data1 = new Date("2003-06-05");
  const data2 = new Date("2003-06-06");
  const data3 = new Date("2003-06-07");

  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    data: data1,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    data: data2,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    data: data3,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);

  gerenciadorDeTarefas.ordenarTarefasPorData();

  expect(gerenciadorDeTarefas.listarTarefas()).toEqual([
    tarefa1,
    tarefa2,
    tarefa3,
  ]);
});

test("Validando ordenar tarefas por prioridade", async () => {
  const prioridadeAlta = 3;
  const prioridadeMedia = 2;
  const prioridadeBaixa = 1;

  const tarefa1 = {
    id: 1,
    titulo: "Estudar",
    descricao: "Estudar para a prova",
    prioridade: prioridadeAlta,
  };

  const tarefa2 = {
    id: 2,
    titulo: "Dormir",
    descricao: "Dormir amanhã",
    prioridade: prioridadeMedia,
  };

  const tarefa3 = {
    id: 3,
    titulo: "Comer",
    descricao: "Comer pizza",
    prioridade: prioridadeBaixa,
  };

  gerenciadorDeTarefas.adicionarTarefa(tarefa1);
  gerenciadorDeTarefas.adicionarTarefa(tarefa2);
  gerenciadorDeTarefas.adicionarTarefa(tarefa3);

  gerenciadorDeTarefas.ordenarTarefasPorPrioridade();

  expect(gerenciadorDeTarefas.listarTarefas()).toEqual([
    tarefa3,
    tarefa2,
    tarefa1,
  ]);
});
