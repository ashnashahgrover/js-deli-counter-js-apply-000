var katzDeliLine = [];

function takeANumber(currentline) {
  var position = length - 1
  position = currentline.([currentline.index]) 
  currentline.push(position + 1); 
  return `Welcome. You are number ${currentline.length} in line.`;
}

// function takeANumber(currentline, name) {
//   currentline.push(name);
//   var position = currentline.indexOf(name) + 1
//   return `Welcome, ${name}. You are number ${position} in line.`;
// }

function nowServing(currentline) {
  if (currentline.length > 0) {
    var customer = currentline.shift()
    return `Currently serving ${customer}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
  return currentline 
}

function currentLine(line) {
  if (line.length > 0) {
    var len = line.length;
    var i = 0
    var LINE = "The line is currently:"
    while (i<len) {
      LINE = LINE + ` ${(i+1)}. ${line[i]},`
      i = i+1;
    }
    LINE = LINE.slice(0, -1);
    return LINE
  }
  else {
    return "The line is currently empty."
  }
}
