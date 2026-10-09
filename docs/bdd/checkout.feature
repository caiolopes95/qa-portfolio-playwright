Feature: Checkout

  Como um cliente
  Quero finalizar minha compra
  Para adquirir os produtos selecionados

  Scenario: Preencher dados obrigatórios
    Given que estou na página de checkout
    When preencho todos os dados obrigatórios
    Then devo avançar para a próxima etapa

  Scenario: Campo obrigatório não preenchido
    Given que estou na página de checkout
    When deixo um campo obrigatório vazio
    Then o sistema deve apresentar uma mensagem de validação