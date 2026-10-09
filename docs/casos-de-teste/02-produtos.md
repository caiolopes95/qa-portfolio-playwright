# Casos de Teste - Produtos

## Objetivo

Este documento reúne os casos de teste da funcionalidade de **Produtos** do Sauce Demo. O objetivo é validar a exibição, navegação e ordenação dos produtos disponíveis, garantindo que o usuário consiga visualizar corretamente o catálogo e utilizar os recursos de ordenação oferecidos pela aplicação.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Produtos |
| Sistema | Sauce Demo |
| Funcionalidade | Catálogo de produtos |
| Ambiente | https://www.saucedemo.com/ |

---

# TC-PROD-001 - Validar carregamento da tela de produtos

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-001 |
| Prioridade |Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Realizar login com credenciais válidas.
- Aguardar o carregamento da página de produtos.

## Resultado esperado

- O usuário deve ser redirecionado para a página de produtos.
- A lista de produtos deve ser exibida.
- Cada produto deve apresentar nome, descrição, preço e imagem.

---

# TC-PROD-002 - Visualizar detalhes de um produto

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-002 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Selecionar um produto da lista.
- Clicar sobre o nome ou imagem do produto.

## Resultado esperado

- O sistema deve exibir a página de detalhes do produto selecionado.
- As informações do produto devem ser apresentadas corretamente.

---

# TC-PROD-003 - Retornar à lista de produtos após visualizar os detalhes

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-003 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário na página de detalhes de um produto. |

## Passos

- Clicar no botão **Back to products**.

## Resultado esperado

- O sistema deve retornar à página de listagem de produtos.
- A lista de produtos deve ser exibida novamente.

---

# TC-PROD-004 - Ordenar produtos por nome (A → Z)

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-004 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Selecionar a opção **Name (A to Z)** no filtro de ordenação.

## Resultado esperado

- Os produtos devem ser exibidos em ordem alfabética crescente (A → Z).

---

# TC-PROD-005 - Ordenar produtos por nome (Z → A)

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-005 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Selecionar a opção **Name (Z to A)** no filtro de ordenação.

## Resultado esperado

- Os produtos devem ser exibidos em ordem alfabética decrescente (Z → A).

---

# TC-PROD-006 - Ordenar produtos por preço (Menor → Maior)

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-006 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Selecionar a opção **Price (low to high)** no filtro de ordenação.

## Resultado esperado

- Os produtos devem ser exibidos em ordem crescente de preço (menor → maior).

---

# TC-PROD-007 - Ordenar produtos por preço (Maior → Menor)

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-007 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Selecionar a opção **Price (high to low)** no filtro de ordenação.

## Resultado esperado

- Os produtos devem ser exibidos em ordem decrescente de preço (maior → menor).