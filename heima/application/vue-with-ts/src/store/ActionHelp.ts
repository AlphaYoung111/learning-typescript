import DataHelper from './DataHelper'
import ItemData from '@/model/ItemData'
import Category from '../model/CateEnum'
class ActionHelper {
  dataHelper: DataHelper = new DataHelper('memodata', 'id')
  memoList: Array<ItemData>
  constructor() {
    this.memoList = this.readData()
  }
  readData(): Array<ItemData> {
    const arr = this.dataHelper.readData()
    const arrItem = arr.map((ele: any) => {
      const item: ItemData = new ItemData()
      item.id = ele.id
      item.categoryId = ele.categoryId
      item.title = ele.title
      item.content = ele.content
      return item
    })
    return arrItem
  }
  // 新增
  add(item: ItemData): number {
    item.id = this.dataHelper.addData(item)
    this.memoList.push(item)
    console.log(this.memoList);

    this.dataHelper.saveData(this.memoList)
    return item.id
  }
  // 修改
  edit(item: ItemData): void {
    const editItem: ItemData | undefined = this.memoList.find(ele => ele.id == item.id)
    if (editItem) {
      editItem.categoryId = item.categoryId
      editItem.title = item.title
      editItem.content = item.content
      this.dataHelper.saveData(this.memoList)
    }
  }
  // 删除
  remove(id: number): void {
    const index: number = this.memoList.findIndex(ele => ele.id == id)
    if (index > -1) {
      this.memoList.splice(index, 1)
      this.dataHelper.saveData(this.memoList)
    }
  }
  // 枚举值
  getCategoryName(cateId: Category): string {
    const arrNames: Array<string> = ['工作', '生活', '学习']
    return arrNames[cateId]
  }
}

export default ActionHelper