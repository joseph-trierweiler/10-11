import jsonData from '../../assets/data/appetizer.json'

const addType = function(data){
const arr = []
    for (let items in data){
        data[items].forEach(a =>{
            a.type = items
        })
    }
    
    for (let items in data){
        data[items].forEach(a =>{
            if(!arr.includes(a)) arr.push(a)
        })
    }
    return arr
}

const MenuData = addType(jsonData)
console.log(MenuData)

export default MenuData;
