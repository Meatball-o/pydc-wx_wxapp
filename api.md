# api地址

## 房产

### https://heiliuer.com

#### [001] 获取房产列表（分页）

[GET] /api/wxapp/house


#### [002] 获取房产详情

[GET] /api/wxapp/house/:id

#### [003] 关于我们

[GET] /api/wxapp/about

#### [004] 足迹-增加

[POST] /api/wxapp/user_track

request body:
```json
{
  "houseId":"xxxxx"
}
```

#### [005] 足迹-列表 （分页）

[GET] /api/wxapp/user_track


#### [006] 收藏-增加

[POST] /api/wxapp/favorite

request body:
```json
{
  "houseId":"xxxxx"
}
```

#### [007] 收藏-列表 （分页）

[GET] /api/wxapp/favorite


#### [008] 反馈-增加

[POST] /api/wxapp/feedback

request body:
```json
{
  "content":"反馈内容"
}
```

#### [009] 反馈-列表 （分页）

[GET] /api/wxapp/feedback


#### [009] 房产-搜索 （分页）

[GET] /api/wxapp/search

query params:
```json
{
  "key":"关键字"
}
```


