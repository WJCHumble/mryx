/*
ajax请求函数模块
返回值：promise对象（异步返回的数据是：response.data）
*/

import axios from 'axios'
// const BASE_URL = 'http://d.apicloud.com/mcm/api'
export default function ajax (url, data={}, type='GET') {
	//返回一个Promise对象
	return new Promise(function (resolve, reject) {
		//执行异步ajax请求
		let promise
		//设置请求头
		const instance = axios.create({
		  // baseURL: 'http://d.apicloud.com/mcm/',  //生产环境
		  // baseURL: '/api',  //开发环境
		  timeout: 6000,
		  headers: {
		  	'X-APICloud-AppId': 'A6914327011091',
		  	'X-APICloud-AppKey': '8ac17d22e49cb7982d82796097cec52a6c7cd01d.1475375422841'
		  }
		})
		// console.log(url)
		if (type === 'GET') {
			//准备url query参数数据
			let dataStr  = '' //数据拼接字符串
			//传入的query参数 例如{name: 'wjc'} 处理后 name=wjc  即可以通过obj['name']的方式访问类的属性
			//取出对象中的key，拼接成url参数
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&'
			})
			if (dataStr !== '') {
				//去掉拼接时多出的&
				dataStr =  dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + '?' + dataStr
				// console.log(url)
			}
			promise = instance.get(url)
			
		} else {
			promise = instance.post(url, data)
		}
		//处理promise
		promise.then((response) => {
			//成功了调用resolve
			resolve(response.data)
		}).catch((error) => {
			reject(error)
		})
	})
}