const checkUnique = string => {
    let map = {}
    for (let index = 0; index < string.length; index++) {
        console.log(index)
        if (map[string[index]]===true){
            return false;
        } else {
            map[string[index]] = true;
        }
    }
    return true;
}