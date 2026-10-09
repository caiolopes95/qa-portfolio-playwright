Feature: Login

  Como um usuário da plataforma
  Quero realizar a autenticação
  Para acessar as funcionalidades da loja

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When informo um usuário válido
    And informo uma senha válida
    And clico no botão "Login"
    Then devo ser autenticado
    And devo ser redirecionado para a página inicial

  Scenario: Login com senha inválida
    Given que estou na página de login
    When informo um usuário válido
    And informo uma senha inválida
    And clico no botão "Login"
    Then devo visualizar uma mensagem de erro

  Scenario Outline: Campos obrigatórios
    Given que estou na página de login
    When deixo o campo "<campo>" vazio
    And clico no botão "Login"
    Then devo visualizar a mensagem "<mensagem>"