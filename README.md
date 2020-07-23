# Tela de Cadastro

Uma tela de cadastro feito com o quasar framework. O aplicativo está dividido entre algumas páginas, cada uma contendo uma template de quasar e o script do código. 

Funcionamento básico:

Usuários: ao clicar em listar usuários, é feita uma solictação ajax para o endereço solicitado no teste. Os resultados são carregados em uma tabela. Caso existam usuários cadastrados localmente, também são listados.

Cadastrar usuário: cadastra um usuário localmente. Recebe um nome, um email e um link para uma imagem (avatar). O ID é gerado pelo servidor de teste solicitado. 

Editar: modifica um usuário cadastrado localmente. A chave de busca utilizada é o ID do usuário. É possível editar todos os campos (menos o ID). Caso deseje manter um campo (não editá-lo), basta preencher o campo com '-'

Excluir: exclui um usuário cadastrado localmente. A chave de busca utilizada é o ID do usuário. Existe um 'toogle' de segurança, caso não seja marcado a exclusão não acontece. 

Texto gerado automaticamente pelo quasar:

## Instalar as dependências
```bash
yarn
```

### Modo de desenvolvimento
```bash
quasar dev
```

### Lint 
```bash
yarn run lint
```

### Build do app
```bash
quasar build
```

### Customizar
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
