<template>
  <q-page padding>
    <h4>Excluir usuário:</h4>
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
        label="ID do usuário a ser excluído *"
        outlined
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Não pode ser vazio'
        ]"
      />

      <q-toggle v-model="accept" label="Deseja realmente excluir o usuário?" />

      <div>
        <q-btn label="Excluir" type="submit" color="red"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      id: null,

      accept: false
    }
  },
  // Método presente em todas as páginas, 1 para quando a tabela em usuaruis.vue está montada
  // ou 0 quando ela não está montada
  created () {
    localStorage.setItem('listDisplay', '0')
  },
  methods: {
    onSubmit () {
      const ID = this.id
      // Cria um vetor auxiliar
      var vetAux = []
      var flag = false
      // Se o usuário não marcou o botão de segurança, a exlusão não é feita
      if (this.accept === true) {
        // Copia o armazenamento local para o vetor auxiliar, sem o usuário com a ID a ser excluído
        for (var i = 2; i < localStorage.length - 1; i = i + 3) {
          if (localStorage.getItem(i) !== ID) {
            if (flag !== true) {
              vetAux[i - 2] = localStorage.getItem(i - 2)
              vetAux[i - 1] = localStorage.getItem(i - 1)
              vetAux[i] = localStorage.getItem(i)
            } else {
              vetAux[i - 5] = localStorage.getItem(i - 2)
              vetAux[i - 4] = localStorage.getItem(i - 1)
              vetAux[i - 3] = localStorage.getItem(i)
            }
          } else {
            flag = true
            continue
          }
        }
        // Limpa o armazenamento local, sendo que um novo armazenamento local é criado a partir
        // dos dados do vetor auxiliar
        var length = localStorage.length - 4
        localStorage.clear()
        for (i = 0; i < length; i++) {
          localStorage.setItem(i, vetAux[i])
        }
        localStorage.setItem('listDisplay', '0')
        this.$q.notify({
          message: 'Operação concluída'
        })
      }
    },

    onReset () {
      this.name = null
      this.id = null
      this.accept = false
    }
  }
}
</script>
