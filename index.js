//利用新增数组方法操作数组
var data=[{
    id:1,
    pname:'小米',
    price:3999
},
{
    id:2,
    pname:'华为',
    price:4999
},
{
    id:3,
    pname:'三星',
    price:3999
},
{
    id:4,
    pname:'苹果',
    price:5999
},
{
    id:5,
    pname:'华为',
    price:3999
},
{
    id:6,
    pname:'小米',
    price:2999
},
{
    id:7,
    pname:'苹果',
    price:5999
}
]
//获取相应的元素
var tbody=document.querySelector('tbody')
var start=document.querySelector('.start');
var end=document.querySelector('.end');
var searchPrice=document.querySelector('.search-price');
var searchPro=document.querySelector('.search-pro');
var product=document.querySelector('.product');

//页面加载出来的时候先初始化把原来的data中的数据渲染到页面
selectData(data)
//2.把数组渲染到页面中
function selectData(setData){
    //每次渲染之前应该先清空原来tbody中的数据
    tbody.innerHTML='';
    setData.forEach(function(value){
    console.log(value.id);
    var tr=document.createElement('tr');
    tr.innerHTML=`<td>${value.id}</td><td>${value.pname}</td><td>${value.price}</td>`;
    tbody.appendChild(tr);   
})
}

searchPrice.addEventListener('click',function(){
   var newData=data.filter(function(value){
    //    console.log(end.value);
    //    console.log(start.value);
    //    console.log(value.price)
       return value.price>=start.value&&value.price<=end.value;
   })
   //用新数据重新渲染页面
   selectData(newData)
})
searchPro.addEventListener('click',function(){
    var newData=data.filter(function(value){
        return value.pname==product.value;
    })
    selectData(newData);
})