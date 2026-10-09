Feature: Produtos

  Como um usuário autenticado
  Quero visualizar os produtos
  Para escolher um item da loja

  Scenario: Exibir catálogo de produtos
    Given que estou autenticado
    When acesso a página de produtos
    Then devo visualizar todos os produtos disponíveis

  Scenario: Visualizar detalhes de um produto
    Given que estou na página de produtos
    When seleciono um produto
    Then devo visualizar seus detalhes