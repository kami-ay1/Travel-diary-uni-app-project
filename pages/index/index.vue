<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script setup>
import {getBanner} from '../../api/api.js'	
import {onLoad} from '@dcloudio/uni-app'



onLoad(()=>{
	getBanner().then(res=>{
		console.log(res,'res')
	})
})





</script>

<style lang='scss'>
	
</style>
