<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="text">uview-plus进度组件：</view>
    <view class="slider-container">
      <up-slider v-model="value"></up-slider>
    </view>
    <view>当前进度：{{ value }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
const value = ref(30)
</script>

<style>
.content {
  width: 100%;
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

.text {
  margin-top: 32px;
}

.slider-container {
  width: 100%;
}
</style>
