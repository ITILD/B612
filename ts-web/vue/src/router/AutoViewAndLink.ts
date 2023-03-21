class AutoViewAndLink {
  modules: Record<string, () => Promise<unknown>>
  constructor() {
    const modules = import.meta.glob('../views/**/**/**.vue') //{ eager: true } 同步
    console.log(modules)
    this.modules = modules
    const routesA = []
    
    // 路由的glob endsWith  按顺序处理
    for (const routeStr in modules) {
      const route = modules[routeStr]
      const routeStrArr = routeStr.split('/')
      const lastStr = routeStrArr[routeStrArr.length - 1]

      // 
      for (let index = 2; index < routeStrArr.length; index++) {
        const element = routeStrArr[index]
        console.log(element)


      }
      console.log(' ')
      
      // 布局
      if (lastStr == 'IndexPage.vue') {
        
        continue
      }
      // 子首页
      if (lastStr == 'IndexLayout.vue') {
        continue
      }
      // 子分页
      if (lastStr.endsWith('View.vue')) {
        continue
      }

    }
  }

  routes() {
    return this.modules
  }

  links() { }
}

// 单例
export default new AutoViewAndLink()

//     // 所有views页面
// // const modules = import.meta.glob("../views/**/**/**.vue")//{ eager: true } 同步
//     const modules = import.meta.glob('../views/user/IndexLayout.vue')//{ eager: true } 同步

//     console.log(modules)
//     return modules
