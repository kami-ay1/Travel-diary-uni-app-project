import http from './http.js'
export const getBanner = () => {
	return http('/user/getBanner')
}

export const getHomeList = ()=>{
	return http('/user/getHomeList')
}