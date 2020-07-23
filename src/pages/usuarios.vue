<template>
  <body>
    <q-page padding>
      <h4>Usuários cadastrados:</h4>
        <div>
          <q-btn position ="center" label="Listar usuários" @click="myFunc"/>
        </div>
        <div>
          <p>

            </p>
        </div>
        <div id="container" position="fixed-center">
        </div>
    </q-page>
  </body>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
export default {
  created () {
    localStorage.setItem('listDisplay', '0')
  },
  methods: {
    myFunc () {
      // Solicita os dados do servidor
      axios.get('https://reqres.in/api/users')
        .then((response) => {
          var firstNames = {}
          var lastNames = {}
          var ids = {}
          var emails = {}
          var avatars = {}
          // Lê a resposta do servidor e armazena nos vetores
          for (var i = 0; i < response.data.data.length; i++) {
            firstNames[i] = response.data.data[i].first_name
            lastNames[i] = response.data.data[i].last_name
            ids[i] = response.data.data[i].id
            emails[i] = response.data.data[i].email
            avatars[i] = response.data.data[i].avatar
          }
          // Se a lista já está na tela, nada acontece
          if (localStorage.getItem('listDisplay') === '0') {
            // Cria a tabela usando os campos armazenados nos vetores
            localStorage.setItem('listDisplay', '1')
            var table = document.createElement('table')
            table.setAttribute('id', 'tabela')
            var row = table.insertRow()
            for (i = 0; i < response.data.data.length; i++) {
              var avatarCell = row.insertCell()
              avatarCell.innerHTML = '<img src="' + avatars[i] + '" alt="avatar" style="max-height:100%; max-width:100%"  />'
              var NameCell = row.insertCell()
              NameCell.innerText = firstNames[i] + ' ' + lastNames[i]
              var emailCell = row.insertCell()
              emailCell.innerText = emails[i]
              var idCell = row.insertCell()
              idCell.innerText = 'ID: ' + ids[i]
              row = table.insertRow()
            }
            // O segundo for percorre a memória local
            for (i = 0; i < localStorage.length - 1; i = i + 3) {
              avatarCell = row.insertCell()
              avatarCell.innerText = '-'
              NameCell = row.insertCell()
              NameCell.innerText = localStorage.getItem(i)
              emailCell = row.insertCell()
              emailCell.innerText = 'Job: ' + localStorage.getItem(i + 1)
              idCell = row.insertCell()
              idCell.innerText = 'ID: ' + localStorage.getItem(i + 2)
              row = table.insertRow()
            }
            document.getElementById('container').appendChild(table)
          } else {}
        })
    }
  }
}
</script>

<style lang="scss">
#tabela {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
#tabela td, #tabela th {
  border: 1px solid #ddd;
  padding: 15px;
  width: 100px;
  height: 100px;
}
</style>
