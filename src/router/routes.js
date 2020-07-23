
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Usuarios', component: () => import('pages/usuarios.vue') },
      { path: '/Cadastro', component: () => import('pages/cadastro.vue') },
      { path: '/Editar', component: () => import('pages/editar.vue') },
      { path: '/Exclusao', component: () => import('pages/exclusao.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
