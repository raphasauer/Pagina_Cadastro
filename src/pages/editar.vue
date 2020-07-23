<template>
  <q-page padding>
    <h4>Editar usuário:</h4>
    <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="number"
        v-model="id"
        label="ID *"
        hint="ID do usuário a ser editado"
        outlined
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age'
        ]"
      />

      <q-input
        filled
        v-model="name"
        label="Nome *"
        hint="Novo nome do usuário ou - para manter o mesmo nome"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Não pode ser vazio']"
      />

      <q-input
        filled
        v-model="job"
        label="Função *"
        hint="Nova função do usuário ou - para manter a mesma função"
        outlined
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age'
        ]"
      />

      <div>
        <q-btn label="Enviar" type="submit" color="primary"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
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
      job: null,
      id: null
    }
  },
  // Método presente em todas as páginas, 1 para quando a tabela em usuaruis.vue está montada
  // ou 0 quando ela não está montada
  created () {
    localStorage.setItem('listDisplay', '0')
  },

  methods: {
    onSubmit () {
      const id = this.id
      // Faz a solicitação ao servidor
      axios.put('https://reqres.in/api/users',
        {
          first_name: this.name,
          job: this.job
        }).then(function (response) {
        // Localiza o usuário com a ID solicitada, se não for encontrado nenhuma alteração é feita
        for (var i = 0; i < localStorage.length - 1; i++) {
          if (localStorage.getItem(i) === id) {
            // Altera seus campos
            i--
            if (response.data.job !== '-') {
              localStorage.setItem(i, response.data.job)
            }
            i--
            if (response.data.first_name !== '-') {
              localStorage.setItem(i, response.data.first_name)
            }
            break
          }
        }
      })
      this.$q.notify({
        message: 'Operação concluída'
      })
    },
    onReset () {
      this.name = null
      this.job = null
      this.id = null
      this.accept = false
    }
  }
}
</script>
