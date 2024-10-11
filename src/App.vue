<script setup lang="ts">
/* eslint-disable no-console */
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import 'uview-plus/theme.scss';
@import 'uview-plus/index';

page {
  background-color: #f5f5f5;
}
</style>
