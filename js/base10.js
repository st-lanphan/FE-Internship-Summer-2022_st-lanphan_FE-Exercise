const convertString = (string) => {
  const strArray = string.split(' AND ')
  const output = strArray.map(item => {
  let temp = item.split(' OR ')
  if (temp.length < 2) {
          return Number(temp[0].replace(/[{()}]/g, ''))
  } else {
      let temp1 = temp.map(i => Number(i.replace(/[{()}]/g, '')))
    return {
      'or': temp1
    }
  }
})
return output
}
console.log( convertString('{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})'))