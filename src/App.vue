<!-- eslint-disable no-console -->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

onLaunch(() => {
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style lang="scss">
@import '@/uni_modules/uni-scss/index.scss';
@import '@/uni_modules/uni-scss/variables.scss';

page {
  background-color: #f5f5f5;
}
</style>
