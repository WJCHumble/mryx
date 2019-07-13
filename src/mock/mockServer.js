import Mock from 'mockjs'
import data from './data.json'

// 返回水果的接口
Mock.mock('/fruits', {code:0, data: data.fruits})
// 返回食材的接口
Mock.mock('/ingredients', {code:0, data: data.ingredients})
// 返回零食的接口
Mock.mock('/snakes', {code:0, data: data.snakes})
//返回牛奶的接口
Mock.mock('/milks', {code:0, data: data.milks})
//返回蔬菜的接口
Mock.mock('/vegetables', {code:0, data: data.vegetables})