# API de Eventos e Notificações

API REST desenvolvida em **Node.js + Express**, seguindo o padrão **MVC**, para gerenciamento de **Eventos**, **Participantes** e **Inscrições**, com documentação interativa via **Swagger (OpenAPI)**.

---

## 🚀 Como rodar o projeto

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Inicie o servidor:

   ```bash
   npm start
   ```
4. Acesse:

   ```
   http://localhost:3000
   ```

---

## 📚 Documentação com Swagger

A API possui documentação interativa gerada com **Swagger**, permitindo testar os endpoints diretamente pelo navegador.

### 🔗 Acesso

Após iniciar o servidor, acesse:

```
http://localhost:3000/api-docs
```

### ✨ Recursos

* Visualização de todos os endpoints
* Testes direto na interface
* Estrutura organizada por módulos
* Esquemas de requisição e resposta

---

## 🏗️ Arquitetura (Padrão MVC)

O projeto segue o padrão **MVC (Model-View-Controller)**:

* **Models** → Representação dos dados
* **Controllers** → Regras de negócio
* **Routes** → Definição dos endpoints

---

## 📦 Funcionalidades

### 👤 CRUD de Participantes

* Criar participante
* Listar participantes
* Buscar por ID
* Atualizar participante
* Deletar participante

### 📝 CRUD de Inscrições

* Criar inscrição
* Listar inscrições
* Listar por evento
* Cancelar inscrição
* Ver detalhes da inscrição

### 🎉 CRUD de Eventos

* Criar evento
* Listar eventos
* Buscar evento por ID
* Atualizar evento
* Remover evento

---

## 🔗 Principais Rotas

### Participantes

* `GET /participantes`
* `GET /participantes/:id`
* `POST /participantes`
* `PUT /participantes/:id`
* `DELETE /participantes/:id`

### Inscrições

* `POST /inscricoes`
* `GET /inscricoes`
* `GET /inscricoes/evento/:eventoId`
* `PATCH /inscricoes/:id/cancelar`
* `GET /inscricoes/:id/detalhes`

### Eventos

* `GET /eventos`
* `GET /eventos/:id`
* `POST /eventos`
* `PUT /eventos/:id`
* `DELETE /eventos/:id`

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express.js
* Swagger (OpenAPI)

---

## 📌 Observações

* Projeto estruturado para fácil manutenção e escalabilidade
* Separação clara de responsabilidades (MVC)
* Documentação integrada facilita testes e integração com front-end

---

## 👩‍💻 Autor

Desenvolvido para fins de estudo e prática de APIs REST com documentação profissional.
