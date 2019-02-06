function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let range = Math.abs(parseInt(firstBlock, 10) - parseInt(secondBlock, 10))
    range > this.blockRange ? range = `within range by ${range}` : range = `${range} blocks out of range`
    return range
  }
}
