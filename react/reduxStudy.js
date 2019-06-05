//首先引入import PropTypes from 'prop-types';  声明拿到数据的类型  
import { getProData, togSelectPro, editPro } from '@/store/production/action'; 引入reduce方法
static propTypes = {
    proData: PropTypes.object.isRequired,
    getProData: PropTypes.func.isRequired,
    togSelectPro: PropTypes.func.isRequired,
    editPro: PropTypes.func.isRequired,
  }
1.onClick={this.handleEdit.bind(this, index, 1)}
//2.调用方法
handleEdit = (index, num) => {
    let currentNum = this.props.proData.dataList[index].selectNum + num;
    if(currentNum < 0){
      return
    }
    this.props.editPro(index, currentNum);
  }
//3.编辑商品为公共变量   修改返回数据的值
// 编辑商品
export const editPro = (index, selectNum) => {
  return {
    type: pro.EDITPRODUCTION,
    index,
    selectNum,
  }
}