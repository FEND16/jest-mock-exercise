const filterActions = {
  filterById(list, id){
    return list.filter(item => item.id === id);
  },
  filterByName(list, name){
    return list.filter(item => item.username === name)
  }
}


module.exports = filterActions;