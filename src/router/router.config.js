
export const routes = [
  {
    path: '/',
    name: '',
    redirect: '/main',
    component: () => import('@/components/Basic'),
    meta: { msg: '主页' },
    children: [
      {
        path: "/main",
        name: "扫描任务",
        component: () => import('@/components/Main'),
      },
      {
        path: "/home",
        name: "代码仓库",
        redirect: '/home/children1',
        children: [
          {
            path: '/home/children1',
            name: '构建任务'
          },
          {
            path: '/home/children2',
            name: '主机部署'
          },
        ]
        
      }
    ]
  }
]