<template>
  <q-layout view="lHh Lpr lFf">
  <title>
    Teste para vaga front-end
  </title>
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Teste para vaga front-end
        </q-toolbar-title>
          <q-tabs>
            <q-route-tab name="Usuários" to="/Usuarios" icon="people" label="usuarios"/>
            <q-route-tab name="Cadastrar Usuário" to="/Cadastro" icon="person" label="cadastrar"/>
            <q-route-tab name="Editar Usuário" to="/Editar" icon="edit" label="editar"/>
            <q-route-tab name="Excluir Usuário" to="/Exclusao" icon="delete" label="excluir"/>
        </q-tabs>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
localStorage.setItem('listDisplay', '0')
export default {
}
</script>
