function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let range = Math.abs(parseInt(firstBlock, 10) - parseInt(secondBlock, 10))
    range = blockRange - range
    range >= 0 ? range = `within range by ${range}` : range = `${-1 * range} blocks out of range`
    return range
  }
}
function produceTipCalculator(percentage){
  return function(cost){
    return percentage * cost
  }
}
function createDriver{
  Class Driver{
    constructor(name){
      this.name = name
    }
  }
}
