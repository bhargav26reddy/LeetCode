var compactObject = function(obj) {
    if(obj === null){
        console.log(obj,'sai')
        return obj
    }

    if(typeof obj !== "object"){
        console.log('hey')
        return obj
    }

    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted = {}
    for(const key in obj){
        console.log(obj[key])
        let value = compactObject(obj[key])
         if(value){
        compacted[key] = value
        }
    }
    
    return compacted
};