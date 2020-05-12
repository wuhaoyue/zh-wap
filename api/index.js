const BASE = require('~/config/index.js')
const DGG_SERVER_ENV = process.env.DGG_SERVER_ENV

// 咨询信息
export const consult = {
  form: `${BASE[DGG_SERVER_ENV].ibossucURL}api/iboss/uc/cloud/consultation/v1/save_consultation.do`,
}
