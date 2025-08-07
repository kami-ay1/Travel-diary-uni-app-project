import http from './http.js'
export const getBanner = () => {
	return http('/user/getBanner')
}