Feature: Carrinho

  Como um cliente
  Quero gerenciar os produtos do carrinho
  Para realizar uma compra

  Scenario: Adicionar produto ao carrinho
    Given que estou na página de produtos
    When adiciono um produto ao carrinho
    Then o produto deve ser exibido no carrinho

  Scenario: Remover produto do carrinho
    Given que existe um produto no carrinho
    When removo o produto
    Then o carrinho deve ficar vazio