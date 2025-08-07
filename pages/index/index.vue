<template>
	<view class="content">
		<up-search placeholder="搜索" bg-color="#e3e3e3" v-model="keyword"></up-search>
		<up-swiper v-if='bannerList' :list="bannerList" :autoplay='true' radius="8" keyName="image" height="160"
			showTitle='true'></up-swiper>
		<up-notice-bar :text='text1'></up-notice-bar>
		<view class='list'>
			<up-waterfall v-model="flowList" ref="uWaterfallRef">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img"
							:index="index"></up-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.times}}
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								{{item.tag[0]}}
							</view>
							<view class="demo-tag-text">
								{{item.tag[1]}}
							</view>
						</view>	
						<view class='isDot' v-if='item.isDot'>
							{{item.isDot}}
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img"
							:index="index"></up-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
					</view>
				</template>
			</up-waterfall>
		</view>
	</view>
</template>

<script setup>
	import {
		getBanner,
		getHomeList
	} from '../../api/api.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref,
		reactive
	} from 'vue'

	const text1 = '迎面走来的你让我如此蠢蠢欲动！'
	const keyword = ref('')
	const bannerList = ref([])
	const flowList = ref([])

	onLoad(() => {
		getBanner().then(res => {
			console.log(res, 'res')
			bannerList.value = res.bannerList
		})
		getHomeList().then(res => {
			console.log(res, 'getHomeList')
			flowList.value = res
		})
	})
</script>

<style lang='scss'>
	.content {
		padding: 20rpx 20rpx;

	}


	.list {
		margin: 30rpx 0;
		.demo-warter{
			margin: 10rpx 10rpx 10rpx 0;
			background-color: '#fff';
			border-radius: 16rpx;
			padding: 16rpx;
			position: relative;
		}
		.demo-title{
			font-size: 30rpx;
			margin-top: 10rpx;
			color:#303133;
		}
		.demo-price{
			font-size: 24rpx;
			color:#777;
			margin-top:10rpx;
		}
		.demo-tag{
			display: flex;
			margin-top: 10rpx;
			.demo-tag-owner{
				border:1px solid rgb(252,163,129);
				color:#ffaa00;
				font-size: 20rpx;
				display: flex;
				align-items: center;
				padding: 4rpx 14rpx;
				border-radius: 50rpx;
			}
			.demo-tag-text{
				border:1px solid #00aaff;
				color:#00aaff;
				margin-left: 20rpx;
				border-radius: 50rpx;
				padding:4rpx 14rpx;
				font-size:20rpx;
				display: flex;
				align-items: center;
			}
		}
		.isDot{
			position: absolute;
			top:20rpx;
			right: 20rpx;
			font-size: 24rpx;
			color:#fff;
			line-height: 32rpx;
			background-color: #ff0000;
			text-align: center;
			border-radius: 10rpx;
			padding: 4rpx 10rpx;
		}
	}
</style>