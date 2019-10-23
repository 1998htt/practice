变量 var
输出 print
函数 function
显示数据库 show dbs
进入/创建 数据库 use shop
显示集合 show collections
插入 db.use.unsert({'name':'weichuang'})
查询 db.user.find()查询所有
查询 db.user.findOne()查询第一个
修改 db.user.update({查询},{修改})
删除db.user.remove(条件)
删除集合db.user.drop()
删除数据库db.dropDatabase()
加载文件 load('./xx.js')
var username = 'htt'
var time = Date.parse(new Date())
var data = {
     'username':username,
     'registTime':time
}
var db = connect('weichuang');
db.user.insert(data);
load('./mongodb.js');
 数据更新
 $set 修改指定的key
 $unset 删除指定的key
 upsert 如果有就修改，没有就插入
 multi 给所有的数据加一个属性
 $push 给一个为数组的属性增加一个，有没有都插入
 $addToSet 如果有就不加入，没有才插入
 $each 将一个数组中的每一个都插入进去
 $set
 findAndModify：应答式的，有返回值
 new:true 返回新的值
 new:false  返回修改前的值
 数据查询 
 $lt $gt $lte $gte
 $in
 $or $and $not
 数组 $all $in $size
 分页 limit skip sort
  
 js forEach