showStars(10)


function showStars(rows){
  for( let row = 1; row <= rows; row++){
    let pattern = '';
    
    // if we are in row 5 this LOOP WILL EXECUTE 5 TIMES***** ( this loop take an the row we get from above)
    for(let i=0; i < row; i++)
      pattern += "*"
    
    console.log(pattern)
  }
    
}