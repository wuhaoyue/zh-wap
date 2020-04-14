/*
 * @Author: your name
 * @Date: 2020-02-21 04:16:27
 * @LastEditTime: 2020-02-21 19:51:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /xdy-wap/plugins/router.js
 */
import Vue from 'vue'
export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (process.client) {
      Vue.nextTick(() => {
        dggSensors.quick('autoTrackSinglePage')
      })
    }
    next()
  })
}
