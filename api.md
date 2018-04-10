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
  houseId:"xxxxx"
}
```

#### [005] 足迹-列表 （分页）

[GET] /api/wxapp/user_track
