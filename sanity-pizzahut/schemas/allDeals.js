export default {
name:'deals',
title:'Deals',
type:'document',
fields:[
{
name:'name',
title:'Name',
type:'string',



},
{
    name:'image',
    title:'Image',
    type:'image',
    option:{
        hotspot:true
}
},
{
name:'slug',
title:'Slug',
type:'slug',
options:{
    source:'name',
    maxLength:90,
}

},
{
name:'desc',
title:'Description',
type:'string'

}
,
{
name:'price',
title:'Price',
type:'number'

},
{
name:'type',
title:'Type',
type:'string'

},
{
name:'category',
title:'Category',
type:'string'

},
{
name:'note1',
title:'Note1',
type:'string'

}
,
{
name:'note2',
title:'Note2',
type:'string'

}





]




}
