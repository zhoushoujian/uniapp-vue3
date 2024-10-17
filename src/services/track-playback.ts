import request from '@/utils/request'

// 查询车辆水位数据
export const queryWaterCurveLatest = (params: { startTime: string; endTime: string; imei: string }) => {
  return request({
    url: `/kaihuahw/gpssignal/waterCurveLatest`,
    method: 'GET',
    params,
  })
}

// 查询车辆作业道路数据
export const getRoadEquipmentWork = (imei: string) => {
  return request({
    url: `/kaihuahw/roadequipmentwork/page?page=1&limit=10&imei=${imei}`,
    method: 'POST',
  })
}

// 查询所有作业道路数据
export const getRoadList = () => {
  return request({
    url: `/kaihuahw/road/list`,
    method: 'POST',
  })
}

// 轨迹回放行驶列表
export const trackSearch = (data: {
  vin: string
  starttime: number
  endtime: number
  page: number
  pagesize: number
}) => {
  return request({
    url: `/sn/ota/gd/trsearch`,
    data,
    method: 'GET',
  })
}
