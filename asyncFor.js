//异步async  await    循环使用

//JavaScript 中的 forEach不支持 promise 感知，也不支持 async 和await，所以不能在 forEach 使用 await 。

//如果你在 map 中使用 await，map 总是返回promises，你必须等待promises 数组得到处理。 或者通过await Promise.all(arrayOfPromises)来完成此操作。  列：
const mapLoop = async _ => { 
	console.log('Start');
 	const promises = fruitsToGet.map(async fruit => { 
		const numFruit = await getNumFruit(fruit); 
		return numFruit; 
	}); 
	const numFruits = await Promise.all(promises); 
	console.log(numFruits); 
	console.log('End') 
}
//				forEach map filter reduce 
//操作 			循环（迭代） 映射 过滤器 汇总
//返回值 		undefined 返回新数组 返回新数组 返回计算结果total
//改变原数组？ 	看情况 否 否 否
//检测空数组？ 	不检测 不检测 不检测 不检测