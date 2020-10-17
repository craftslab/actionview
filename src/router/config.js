import {
  LayoutAuth,
  LayoutDefault
} from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      group: 'apps',
      icon: ''
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          group: 'apps',
          icon: 'mdi-alpha-d-box'
        },
        component: () => import('@/views/Dashboard')
      },
      {
        path: '/code',
        name: 'code',
        meta: {
          title: 'code',
          group: 'apps',
          icon: 'mdi-alpha-c-box'
        },
        component: () => import('@/views/Code')
      },
      {
        path: '/pipeline',
        name: 'pipeline',
        meta: {
          title: 'pipeline',
          group: 'apps',
          icon: 'mdi-alpha-p-box'
        },
        component: () => import('@/views/Pipeline')
      },
      {
        path: '/testing',
        name: 'testing',
        meta: {
          title: 'testing',
          group: 'apps',
          icon: 'mdi-alpha-t-box'
        },
        component: () => import('@/views/Testing')
      },
      {
        path: '/artifacts',
        name: 'artifacts',
        meta: {
          title: 'artifacts',
          group: 'apps',
          icon: 'mdi-alpha-a-box'
        },
        component: () => import('@/views/Artifacts')
      }
    ]
  }
]
