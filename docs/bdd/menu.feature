Feature: Menu

  Como um usuário
  Quero utilizar o menu da aplicação
  Para navegar entre as páginas

  Scenario: Acessar uma opção do menu
    Given que o menu está disponível
    When seleciono uma opção
    Then devo ser redirecionado para a página correspondente