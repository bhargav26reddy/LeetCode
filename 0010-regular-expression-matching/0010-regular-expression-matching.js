var isMatch = function(s, p) {
    let regexp;
   try {
        regexp = new RegExp(p,'g')
   }catch{
       return true
   }
    let matching = s.match(regexp)
    if(!matching) return false
    return matching[0] === s
};