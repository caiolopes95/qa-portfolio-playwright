# Casos de Teste - Checkout

## Objetivo

Este documento reúne os casos de teste da funcionalidade de **Checkout** do Sauce Demo. O objetivo é validar o fluxo de finalização da compra, desde o preenchimento das informações do comprador até a confirmação do pedido, garantindo que o processo ocorra corretamente e que as validações obrigatórias sejam respeitadas.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Checkout |
| Sistema | Sauce Demo |
| Funcionalidade | Finalização da compra |
| Ambiente | https://www.saucedemo.com/ |

---

# TC-CHK-001 - Iniciar o checkout com produto no carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado e com pelo menos um produto adicionado ao carrinho. |

## Passos

- Acessar o carrinho.
- Clicar no botão **Checkout**.

## Resultado esperado

- O sistema deve redirecionar o usuário para a tela **Checkout: Your Information**.

---

# TC-CHK-002 - Finalizar o checkout com dados válidos

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-002 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário na tela **Checkout: Your Information**. |

## Passos

- Informar um **First Name** válido.
- Informar um **Last Name** válido.
- Informar um **Postal Code** válido.
- Clicar em **Continue**.

## Resultado esperado

- O sistema deve redirecionar o usuário para a tela **Checkout: Overview**.

---

# TC-CHK-003 - Validar obrigatoriedade do campo First Name

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-003 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela **Checkout: Your Information**. |

## Passos

- Deixar o campo **First Name** vazio.
- Preencher os campos **Last Name** e **Postal Code**.
- Clicar em **Continue**.

## Resultado esperado

- O checkout não deve prosseguir.
- O sistema deve exibir a mensagem:
  > **Error: First Name is required**

---

# TC-CHK-004 - Validar obrigatoriedade do campo Last Name

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-004 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela **Checkout: Your Information**. |

## Passos

- Preencher o campo **First Name**.
- Deixar o campo **Last Name** vazio.
- Preencher o campo **Postal Code**.
- Clicar em **Continue**.

## Resultado esperado

- O checkout não deve prosseguir.
- O sistema deve exibir a mensagem:
  > **Error: Last Name is required**

---

# TC-CHK-005 - Validar obrigatoriedade do campo Postal Code

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-005 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela **Checkout: Your Information**. |

## Passos

- Preencher os campos **First Name** e **Last Name**.
- Deixar o campo **Postal Code** vazio.
- Clicar em **Continue**.

## Resultado esperado

- O checkout não deve prosseguir.
- O sistema deve exibir a mensagem:
  > **Error: Postal Code is required**

---

# TC-CHK-006 - Cancelar o checkout na etapa de informações

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-006 |
| Prioridade | Baixa |
| Tipo | Positivo |
| Pré-condição | Usuário na tela **Checkout: Your Information**. |

## Passos

- Clicar no botão **Cancel**.

## Resultado esperado

- O sistema deve retornar para a página do carrinho.
- Os produtos adicionados devem permanecer no carrinho.

---

# TC-CHK-007 - Validar as informações dos produtos na etapa Overview

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-007 |
| Prioridade | Alta |
| Tipo | Validação |
| Pré-condição | Usuário na tela **Checkout: Overview**. |

## Passos

- Conferir as informações apresentadas na tela de resumo da compra.

## Resultado esperado

- O nome do produto deve ser exibido corretamente.
- A descrição do produto deve ser exibida corretamente.
- O preço do produto deve ser exibido corretamente.
- O subtotal deve ser exibido corretamente.
- O valor do imposto deve ser exibido corretamente.
- O valor total da compra deve ser exibido corretamente.

---

# TC-CHK-008 - Cancelar o checkout na etapa Overview

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-008 |
| Prioridade | Baixa |
| Tipo | Positivo |
| Pré-condição | Usuário na tela **Checkout: Overview**. |

## Passos

- Clicar no botão **Cancel**.

## Resultado esperado

- O sistema deve retornar para a página de produtos.
- O carrinho deve manter os produtos adicionados.

---

# TC-CHK-009 - Finalizar a compra

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-009 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário na tela **Checkout: Overview**. |

## Passos

- Clicar no botão **Finish**.

## Resultado esperado

- A compra deve ser finalizada com sucesso.
- O sistema deve exibir a mensagem:
  > **Thank you for your order!**

---

# TC-CHK-010 - Retornar para a página inicial após concluir a compra

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHK-010 |
| Prioridade | Baixa |
| Tipo | Positivo |
| Pré-condição | Compra finalizada com sucesso. |

## Passos

- Clicar no botão **Back Home**.

## Resultado esperado

- O sistema deve redirecionar o usuário para a página de produtos.
- A URL deve conter **/inventory.html**.
- A lista de produtos deve ser exibida.