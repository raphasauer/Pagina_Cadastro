<template>
  <q-page padding>
    <h4>Cadastrar novo usuário:</h4>
    <body>
      <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nome *"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Preencha um nome']"
      />
        <q-input
        filled
        v-model="job"
        label="Função *"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Preencha uma função']"
      />
      <div  id="btn">
        <q-btn label="Enviar" type="submit" color="primary"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  </body>
  </q-page>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default {
  data () {
    return {
      name: null,
      job: null
    }
  },
  // Método presente em todas as páginas, 1 para quando a tabela em usuaruis.vue está montada
  // ou 0 quando ela não está montada
  created () {
    localStorage.setItem('listDisplay', '0')
  },
  methods: {
    onSubmit () {
      // Envia os dados para o servidor de teste
      axios.post('https://reqres.in/api/users',
        {
          // Salva os dados do formulário nos campos solicitados
          first_name: this.name,
          job: this.job
        }).then(function (response) {
        // Armazena o usuário em memória local
        var i = localStorage.length - 1
        console.log(response.data.id)
        localStorage.setItem(i, response.data.first_name)
        i++
        localStorage.setItem(i, response.data.job)
        i++
        localStorage.setItem(i, response.data.id)
      })
      this.$q.notify({
        message: 'Usuário cadastrado com sucesso'
      })
    },
    onReset () {
      this.name = null
      this.job = null
    }
  }
}
</script>
