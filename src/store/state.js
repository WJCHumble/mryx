export default {
	selectedIndex: 0, //记录当前选中的tab的下标
	cartFoods: [], //购物车食物列表
	tempCartFoods: [], //用于暂存移除的食物
	supportArea: [], //支持地区列表
	currentCity: {
		createAt: "2016-02-20T06:56:12.317Z",
		id: "56c80e0c789b068408ab5a6f",
		name: "北京市",
		updateAt: "2016-02-20T06:56:12.317Z"
	}, //默认为北京
	foodTypeId: [   //定义食品类别列表
		'56c80da883af652643474b6b',
		'56c80db78d04c83d3d1dedea',
		'56c80dc031da9e480de1cb49',
		'56c80dc383af652643474b6d',
		'56c80dc88d04c83d3d1dedf3'
	],
	foodType: ["fruits", "ingredients", "snacks", "milks", "vegetables"],  //最终形式二维数组  0蔬菜  1食材 2零食 3牛奶 4蔬菜 
	fruits: [], //获取该地区商品列表
	ingredients: [], //食材
	snacks: [], //零食
	milks: [], //牛奶
	vegetables: [], //蔬菜
	totalCount: 0, //记录购物车总的物品数量
	totalPrice: 0, //记录购物车总的价格
	// rbtnState: 0, //管理RadioButton按钮的状态
	food: [{name:'佳沛奇异果', price: 28.9}, {name:'佳沛奇异果', price: 28.9},{name:'无敌菠萝', price: 30}, {name:'佳沛奇异果', price: 28.9}, {name:'无敌菠萝', price: 30}],
	// food2: {name:'菠萝', price: 30}
	myAddress: [
		{
			name: 'Stunning',
			tel: '18157234567',
			locationArea: '嘉兴学院',
			detailAddress: '嘉兴学院越秀校区公寓2F',
			doorNumber: '307',
			type: '学校'
		},
		{
			name: 'WJCHumble',
			tel: '18157361230',
			locationArea: '嘉兴学院',
			detailAddress: '嘉兴学院越秀校区公寓2F',
			doorNumber: '307',
			type: '学校'
		}
	],
	Indicator: {} //定义一个加载对象
}