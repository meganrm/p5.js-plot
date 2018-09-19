p5.Plot.prototype.drawDensityGraph = function()
{
  let xkey = this.xkey;
  let ykey = this.ykey;

  let xmin = this._xmin;
  let xmax = this._xmax;
  let ymin = this._ymin;
  let ymax = this._ymax;

  push();

  fill(this.fillcolor);
  stroke(this.strokecolor);
  strokeWeight(this.strokeweight);

  this.sortData(xkey);
  // an array of different values of xkey
  let valueArr = [];
  // an array of numbers of different values of xkey
  let frequencyArr = [];
  for(let i in this.data)
  {
    let xValue = this.data[i][xkey]; // change this line to work with different keys
    if (valueArr.includes(xValue)){
      frequencyArr[valueArr.indexOf(xValue)] += 1;
    }
    else{
      valueArr.push(xValue);
      frequencyArr.push(1);
    }
  }

  let densityArr = [];
  let frequencyTotal = 0;
  // calculate percentage of frequencies of different values in valueArr
  for (let j=0; j<frequencyArr.length; j++){
    frequencyTotal += frequencyArr[j];
  }
  for (let k=0; k<frequencyArr.length; k++){
    densityArr.push(frequencyArr[k]/frequencyTotal);
  }

  for(let p=0; p<valueArr.length; p++)
  {
    let x = map(valueArr[p], min(valueArr), max(valueArr), this.left, this.right);
    //let y = map(this.data[p][ykey], ymin, ymax, this.bottom, this.top);
    let y = map(densityArr[p], 0, 1, this.bottom, this.top);
    point(x, y);
  }

  pop();


}