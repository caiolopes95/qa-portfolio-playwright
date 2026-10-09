# Casos de Teste - Carrinho

## Objetivo

Este documento reúne os casos de teste da funcionalidade de **Carrinho** do Sauce Demo. O objetivo é validar as operações de adição, remoção, visualização e gerenciamento dos produtos adicionados ao carrinho, garantindo que o usuário consiga preparar corretamente os itens para o processo de checkout.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Carrinho |
| Sistema | Sauce Demo |
| Funcionalidade | Gerenciamento do carrinho de compras |
| Ambiente | https://www.saucedemo.com/ |

---

# TC-CART-001 - Adicionar um produto ao carrinho pela listagem

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e na página de produtos. |

## Passos

- Localizar um produto na listagem.
- Clicar no botão **Add to cart**.

## Resultado esperado

- O produto deve ser adicionado ao carrinho.
- O botão deve alterar seu texto para **Remove**.
- O contador do carrinho deve exibir **1** item.

---

# TC-CART-002 - Visualizar os produtos adicionados ao carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-002 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Pelo menos um produto adicionado ao carrinho. |

## Passos

- Clicar no ícone do carrinho.

## Resultado esperado

- O sistema deve exibir a página do carrinho.
- Todos os produtos adicionados devem ser apresentados ao usuário.

---

# TC-CART-003 - Validar as informações do produto no carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-003 |
| Prioridade | Média |
| Tipo | Validação |
| Pré-condição | Produto adicionado ao carrinho. |

## Passos

- Acessar o carrinho.

## Resultado esperado

- O nome do produto deve ser exibido corretamente.
- A descrição do produto deve ser exibida corretamente.
- O preço do produto deve ser exibido corretamente.
- A quantidade do produto deve ser exibida corretamente.

---

# TC-CART-004 - Remover um produto diretamente do carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-004 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Produto adicionado ao carrinho. |

## Passos

- Acessar o carrinho.
- Clicar no botão **Remove** do produto.

## Resultado esperado

- O produto deve ser removido do carrinho.
- O carrinho deve ser atualizado.
- O produto não deve mais ser exibido.

---

# TC-CART-005 - Adicionar um produto ao carrinho pela tela de detalhes

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-005 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado na página de detalhes de um produto. |

## Passos

- Acessar a página de detalhes de um produto.
- Clicar no botão **Add to cart**.

## Resultado esperado

- O produto deve ser adicionado ao carrinho.
- O botão deve alterar seu texto para **Remove**.
- O contador do carrinho deve exibir **1** item.

---

# TC-CART-006 - Remover um produto pela tela de detalhes

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-006 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Produto adicionado ao carrinho pela tela de detalhes. |

## Passos

- Clicar no botão **Remove**.

## Resultado esperado

- O produto deve ser removido do carrinho.
- O botão deve voltar a exibir **Add to cart**.
- O contador do carrinho deve ser atualizado.

---

# TC-CART-007 - Continuar comprando a partir do carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-007 |
| Prioridade | Baixa |
| Tipo | Positivo |
| Pré-condição | Usuário na página do carrinho. |

## Passos

- Clicar no botão **Continue Shopping**.

## Resultado esperado

- O sistema deve retornar para a página de produtos.
- Os produtos anteriormente adicionados ao carrinho devem permanecer no carrinho.

