function add () {
  let r = 0;
  [...arguments].map(i=>r=r+i)
  return r
}
export default add
