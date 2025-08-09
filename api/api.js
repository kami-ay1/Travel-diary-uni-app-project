import http from './http.js'
export const getBanner = () => {
	return http('/user/getBanner')
}

export const getHomeList = ()=>{
	return http('/user/getHomeList')
}

export const login = (code)=>{
	return http('/login',{code},'POST')
}

export const getUserInfo=()=>{
	return http('/getUserInfo')
}

export const detailProject=()=>{
	return http('/detail/project')
}