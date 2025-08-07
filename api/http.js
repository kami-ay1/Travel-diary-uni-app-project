let baseUrl = ""
//通过环境来判断
if (process.env.NODE_ENV === 'development') {
	baseUrl = 'https://m1.apifoxmock.com/m1/4728220-0-default/api'
} else {
	baseUrl = 'https://m1.apifoxmock.com/m1/4728220-0-default/api'
}

export default function http(url, data = {}, method = 'GET') {
	//return 一个promise支持链式调用
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success: (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						resolve(res.data.data)
					} else if (res.data.data == 0) {
						uni.showToast({
							title: 'res.data.msg',
							icon: 'none'
						})
						reject(res.data.msg)
					}
				}
			},
			fail: () => {
				uni.showToast({
					title: '请求失败',
					icon: 'none'
				})
			}
		})
	})

}