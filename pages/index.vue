<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        dgg-platform-nuxt-pc
      </h1>
      <h2 class="subtitle">
        My badass Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="add">好大</div>
      <!-- 自定义事件 -->
      <div v-md:p_search data-keyword="测试搜索" class="test">
        <span>自定义事件</span>
      </div>
      <!-- 热力图点击事件 -->
      <div v-md-map class="test">
        <span>热力图点击事件</span>
      </div>
      <!-- 自定义事件 和 热力图点击事件 -->
      <div v-md:p_search v-md-map data-keyword="测试搜索" class="test">
        <span>自定义事件 和 热力图点击事件</span>
      </div>
      <a-button type="primary">Primary</a-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    [Button.name]: Button,
    Logo,
  },
  mounted() {
    console.log(process.env.DGG_SERVER_ENV)
  },
}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.add {
  color: @primary-color;
}
.test {
  font-size: 18px;
  margin-bottom: 16px;
  cursor: pointer;
}
</style>
