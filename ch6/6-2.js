// 예제 1
export function rating(driver) {
  // return moreThanFiveLateDeliveries(driver) ? 2 : 1;
  
  // 굳이 함수로뺄 필요가 없어서 인라인 처리
  return driver.numberOfLateDeliveries > 5;
  
}
// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

reportLines({
  name: 'anko',
  location: 'seoul',
});
