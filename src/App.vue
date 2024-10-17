<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
// import { parseUrlParams } from '@szhou/script-tools'
import { logger } from './utils/lib'

onLaunch(() => {
  logger.log('App Launch')
  // const { env } = parseUrlParams()
  // if (!env) {
  //   toast('env不能为空')
  // }
})
onShow(() => {
  // logger.log('App Show')
})
onHide(() => {
  // logger.log('App Hide')
})
</script>
<style lang="scss">
@import 'uview-plus/theme.scss';
@import 'uview-plus/index';

page {
  background-color: #f5f5f5;
}
</style>
