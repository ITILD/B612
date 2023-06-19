<template>
  <div class="">
    <!-- 基础页面纸张 -->
    <div class="box1 grid grid-cols-12">
      <div class="layer1 h-52">
        <div class="layer1 h-full"></div>
      </div>
      <div class="h-52">
        <div class="layer2 h-full"></div>
      </div>
      <div class="layer1 layer2 h-52"></div>
    </div>
    <div class="box2 grid grid-cols-12">
      <div class="layer1 h-52"></div>
      <div class="layer2 h-52"></div>
      <div class="layer1 layer2 h-52"></div>
    </div>

    <ul class="_1by9knb3">
      <li class="_1by9knb4">
       
        <div class="_1by9knb5"><div class="layer1"></div></div>
        <p>
          <span
            _msttexthash="83005"
            _msthash="347"
            >.layer1</span
          >
        </p>
      </li>
      <li class="_1by9knb4">
        <p>
          <span class="cjm7lg9 cjm7lg0 _1qru72h0 __className_0db19d"
            ><span class="_1i0yhbt0" _msttexthash="57004181" _msthash="348"
              >.layer2（无混合模式）</span
            ></span
          >
        </p>
        <div class="_1by9knb5"><div class="layer2"></div></div>
      </li>
      <li class="_1by9knb4">
        <p>
          <span class="cjm7lg9 cjm7lg0 _1qru72h0 __className_0db19d"
            ><span class="_1i0yhbt0">.layer2（带混合模式</span></span
          >
        </p>
        <div class="_1by9knb5">
          <div class="layer1"></div>
          <div class="layer2 blendLayer2"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
// vue
onMounted(() => {})
onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">
.box1 {
  .layer1 {
    background: hsl(40, 35%, 76%);
  }

  .layer2 {
    box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
    background: url('@/assets/lib/_dev/beauty/noise.webp'),
      linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
    mix-blend-mode: overlay;
  }
}

.box2 {
  .layer1 {
    background: hsl(40, 35%, 76%);
  }

  .layer2 {
    box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
    background: url('@/assets/lib/_dev/beauty/waves.webp'),
      linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
    mix-blend-mode: overlay;
  }
}

._1by9knb3 {
  display: grid;
  grid-gap: var(--_1by9knb0);
  grid-template-columns: repeat(1, 1fr);

  ._1by9knb4 {
    width: 100%;
    min-width: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--_1by9knb0);

  }
  
  ._1by9knb5 {
      width: 100%;
      aspect-ratio: 1;
      position: relative;
      overflow: hidden;
      border: var(--_1xn0dsy1x);
    }
    .layer1 {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: hsl(40, 35%, 76%);
    }
    .blendLayer2 {
    mix-blend-mode: overlay;
}

    ._1i0yhbt0 {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

     .layer2 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
    background: url('@/assets/lib/_dev/beauty/noise.webp'), linear-gradient( to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1) );
    // background: url(https://garden.bradwoods.io/images/noise.webp), linear-gradient( to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1) );
}
}
._1by9knb1 {
  --_1by9knb0: 8px;
  width: 100%;
  position: relative;

}
</style>
