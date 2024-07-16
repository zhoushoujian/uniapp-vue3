<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view>
      <uni-link :href="href" :text="href"></uni-link>
    </view>
    <uni-section title="基本用法" type="line" padding>
      <uni-rate v-model="rateValue" @change="onChange" />
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Hello');
const href = ref('https://uniapp.dcloud.io/component/README?id=uniui');
const rateValue = ref(3);
function onChange(e) {
  // eslint-disable-next-line no-console
  console.log('rate发生改变:' + JSON.stringify(e));
  // console.log(this.rateValue);
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
