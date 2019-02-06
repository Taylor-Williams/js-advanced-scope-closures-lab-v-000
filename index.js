function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let range = Math.abs(parseInt(firstBlock, 10) - parseInt(secondBlock, 10))
    range > this.blockRange ? return `within range by ${range}` : return `${range} blocks out of range`
  }
}
