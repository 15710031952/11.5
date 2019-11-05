import Mock,{Random} from 'mockjs'

let data = Mock.mock({
    "attention|30":[{
        id:'@increment',
        title:'@ctitle(10)',
        description:'@cparagraph',
        banner:Random.image('200X100'),
        "commit|1000-9999":1000,
        "favor|1000-9999":1000
    }],
    "recommend|30":[{
        id:'@increment',
        title:'@ctitle(10)',
        description:'@cparagraph',
        banner:Random.image('200X100'),
        "commit|1000-9999":1000,
        "favor|1000-9999":1000
    }],
    "hot|30":[{
        id:'@increment',
        title:'@ctitle(10)',
        description:'@cparagraph',
        banner:Random.image('200X100'),
        "commit|1000-9999":1000,
        "favor|1000-9999":1000
    }]
})

Mock.mock(/\/api\/list/, 'get', function(options){
    console.log('options...', options);
    // 处理请求的数据类型
    let query = options.url.split('?')[1].split('&'),
        queryObj = {};
    query.forEach(item=>{
        let arr = item.split('=')
        queryObj[arr[0]] = arr[1];
    })
    let {type, page, pageSize} = queryObj;
    console.log('data...', data, type);
    return data[type].slice(pageSize*(page-1), pageSize*page);
})