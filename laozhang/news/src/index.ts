import superagent from 'superagent'
import cheerio from 'cheerio'
import path from 'path'
import fs from 'fs'
interface TitleArr{
  title:string
}

interface JsonInfo{
  time: number
  data:TitleArr[]
}

interface Content{
  [propName:number]:TitleArr[]
}

class Reptile{
  private url = 'https://learning.sohu.com/?spm=smpc.news-home.header.7.1587971003432fy3O9eU'
  private filePath=path.resolve(__dirname,'../data/data.json')
  constructor() {
    this.init()
  }
  async init(){
    const html = await this.getHtml()
    const jsonInfo = this.getJsonInfo(html)
    const fileContent = this.getNewContent(jsonInfo)
    this.writeFile(JSON.stringify(fileContent))
  }
  async getHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }
  getJsonInfo(html: string) {
    const $ = cheerio.load(html)
    const item = $('.z-c-block-list-item')
    const titleArr:TitleArr[] = []
    item.map((index, ele) => {
      const child = $(ele).find('a')
      const title = child.text()
      titleArr.push({title})
    })
    return {
      time: new Date().getTime(),
      data:titleArr
    }
  }
  // 存内容
  getNewContent(jsonInfo:JsonInfo){
    let fileContent:Content = {}
    if (fs.existsSync(this.filePath)) {
      fileContent = JSON.parse(fs.readFileSync(this.filePath,'utf-8'))
    }
    fileContent[jsonInfo.time] = jsonInfo.data
    return fileContent
  }
  // 写入
  writeFile(fileContent:string) {
    fs.writeFileSync(this.filePath,fileContent)
  }
}

new Reptile()