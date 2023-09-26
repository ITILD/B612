## 添加 cesium turf 等地信库

### 添加依赖

pnpm i -D cesium
pnpm i -D vite-plugin-cesium
pnpm i @turf/turf

### 修改配置 vite.config.ts

```ts
//cesium 插件
import cesium from "vite-plugin-cesium";
//++ end
export default defineConfig({
  plugins: [
    //++ 开启cesium支持
    cesium(), // 自动引入
    //++ end
  ]
});
```


# 测试编写

# 发布优化

## 拆分打包（配合异步路由和组件）
### 修改配置 vite.config.ts
```ts
export default defineConfig({
  build: {
    // 拆分块
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
```