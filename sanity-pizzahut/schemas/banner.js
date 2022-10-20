export default {
name:'banner',
title:'Banner',
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
type:'array',
of:[{type:'image'}],
option:{
    hotspot:true
}


}]




}
