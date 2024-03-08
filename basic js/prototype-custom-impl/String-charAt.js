let s = "Deepak";

String.prototype.myCharAt = function (index){
      if(index >= this.length && index < 0) return " ";
       return this[index];
}

console.log(s.myCharAt(6));