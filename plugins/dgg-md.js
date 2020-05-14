import Vue from 'vue'
// 埋点指令
Vue.directive('md', {
  inserted(el) {
    el.addEventListener('click', function () {
      const getDataset = this.dataset
      const setData = {}
      const setEvenName = this.dataset.even_name
      for (const key in getDataset) {
        if (
          getDataset[key] !== undefined &&
          key.indexOf('v-') === -1 &&
          key !== 'sensorsClick'
        ) {
          setData[key] = getDataset[key]
        }
      }
      if (setEvenName) {
        window.getTrackRow(setEvenName, setData)
      }
    })
  },
})
// 热力图指令
Vue.directive('md-map', {
  inserted(el) {
    el.addEventListener('click', function () {
      dggSensors.quick('trackHeatMap', this)
    })
  },
})
