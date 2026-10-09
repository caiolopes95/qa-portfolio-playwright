# Casos de Teste - Login

## Objetivo

Este documento reúne os casos de teste da funcionalidade de login do Sauce Demo (Shopify). O objetivo é validar os principais cenários de autenticação, garantindo que usuários válidos consigam acessar o sistema e que situações de erro sejam tratadas corretamente.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Login |
| Sistema | Sauce Demo (Shopify) |
| Funcionalidade | Autenticação de usuários |
| Ambiente | https://www.saucedemo.com/ |

---

# TC-LOGIN-001 - Login com credenciais válidas

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário na tela de login. |
| Massa de teste | Usuário: `standard_user`<br>Senha: `secret_sauce` |

## Passos

- Informar o usuário `standard_user`. 
- Informar a senha `secret_sauce`. 
- Clicar no botão **Login**. 

## Resultado esperado

- O login deve ser realizado com sucesso.
- O usuário deve ser redirecionado para a página **Products**.
- A lista de produtos deve ser exibida.
- Nenhuma mensagem de erro deve ser apresentada.

---

# TC-LOGIN-002 - Login com senha inválida

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-002 |
| Prioridade | Alta |
| Tipo | Negativo |
| Pré-condição | Usuário na tela de login. |
| Massa de teste | Usuário: `standard_user` <br>Senha: `incorreta` |

## Passos

- Informar o usuário `standard_user`. 
- Informar uma senha inválida. 
- Clicar em **Login**. 

## Resultado esperado

- O login não deve ser realizado.
- O sistema deve exibir a mensagem:
  > **Epic sadface: Username and password do not match any user in this service**
- O usuário deve permanecer na tela de login.

---

# TC-LOGIN-003 - Login sem preencher o usuário

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-004 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela de login. |
| Massa de teste | Usuário: vazio<br>Senha: `` |

## Passos

- Deixar o campo **Username** vazio. 
- Informar a senha `incorreta`. 
- Clicar em **Login**. 

## Resultado esperado

- O login não deve ser realizado.
- O sistema deve exibir a mensagem:
  > **Epic sadface: Username is required**

---

# TC-LOGIN-004 - Login sem preencher a senha

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-005 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela de login. |
| Massa de teste | Usuário: `standard_user`<br>Senha: vazia |

## Passos

- Informar o usuário `standard_user`. 
- Deixar o campo **Password** vazio. 
- Clicar em **Login**. 

## Resultado esperado

- O login não deve ser realizado.
- O sistema deve exibir a mensagem:
  > **Epic sadface: Password is required**

---

# TC-LOGIN-005 - Login sem preencher usuário e senha

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-006 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela de login. |

## Passos

- Deixar os campos **Username** e **Password** vazios. 
- Clicar em **Login**. 

## Resultado esperado

- O login não deve ser realizado.
- O sistema deve exibir a mensagem:
  > **Epic sadface: Username is required**

  ---
  # TC-LOGIN-006 - Login com usuário inexistente

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-006 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Usuário na tela de login. |

## Passos

- Informar um **Username** inexistente.
- Informar uma **Password** válida.
- Clicar em **Login**.

## Resultado esperado

- O login não deve ser realizado.
- O sistema deve exibir a mensagem:
  > **Epic sadface: Username and password do not match any user in this service**

---

# TC-LOGIN-007 - Login com usuário bloqueado

| Campo | Descrição |
|--------|-----------|
| ID | TC-LOGIN-007 |
| Prioridade | Alta |
| Tipo | Negativo |
| Pré-condição | Usuário na tela de login. |

## Passos

- Informar o usuário **locked_out_user**.
- Informar a senha **secret_sauce**.
- Clicar em **Login**.

## Resultado esperado

- O login não deve ser realizado.
- O sistema deve exibir a mensagem:
  > **Epic sadface: Sorry, this user has been locked out.**

---
