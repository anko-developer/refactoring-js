// 예제 1
function setWidth(value) {
  this._width = value;
}
function setHeight(value) {
  this._height = value;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  preminumBook(customer) {}
  #book(customer, isPreminum) {}
}

// 예제 3
function switchOn();
function switchOff();


// flag를 매개변수로 사용하는 것을 지양하자
// 매개변수는 3개를 넘어선 안되고, 가장 좋은 함수는 매개변수가 없는 함수다