function add () {
  var list = arguments,
      result = 0
  for ( var i = list.length; i--; ) {
    result = list[i]+result
  }
  return result
}
export default add
