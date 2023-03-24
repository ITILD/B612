
class AutoViewAndLink {
  // 路由
  // 相对跳转地址？
  routesObjArr: Record<string, () => Promise<unknown>>
  constructor() {
    // [{../views/IndexPage.vue : () => import("/src/views/IndexPage.vue")}]
    const routesObjArr = import.meta.glob('../views/**/**/**.vue') //{ eager: true } 同步
    console.log(routesObjArr)
    this.routesObjArr = routesObjArr
    const routesTree = []
    let step = 0 //游标
    // list2tree 路由的glob endsWith  按顺序处理
    for (const routesObjKey in routesObjArr) {
      const thisComponent = routesObjArr[routesObjKey]
      const routeStrArr = routesObjKey.split('/')
      const lastStr = routeStrArr[routeStrArr.length - 1]
      const lastStrParent = routeStrArr[routeStrArr.length - 2]
      step+=1
      //
      for (let index = 2; index < routeStrArr.length; index++) {
        const element = routeStrArr[index]
        console.log(element)
      }
      console.log(' ')
      // 考虑IndexPage IndexLayout View
      // 布局
      if (lastStr == 'IndexPage.vue') {
        const thisRoute = { path: '/', name: 'home', pid:lastStrParent,component: thisComponent }
        routesTree.push(thisRoute)

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
      //路由转树
    }

    console.log(routesTree)
  }

  routes() {
    return this.routesObjArr
  }

  links() {}
}

// 单例
export default new AutoViewAndLink()

//     // 所有views页面
// // const routesObjArr = import.meta.glob("../views/**/**/**.vue")//{ eager: true } 同步
//     const routesObjArr = import.meta.glob('../views/user/IndexLayout.vue')//{ eager: true } 同步

//     console.log(routesObjArr)
//     return routesObjArr


// function list2tree(list: ) {
//   const [map, treeData] = [{}, []];

//   for (let i = 0; i < list.length; i += 1) {
//     map[list[i].id] = i;
//     list[i].children = [];
//   }

//   for (let i = 0; i < list.length; i += 1) {
//     const node = list[i];
//     if (node.pid && list[map[node.pid]]) {
//       list[map[node.pid]].children.push(node);
//     } else {
//       treeData.push(node);
//     }
//   }
//   return treeData;
// }

