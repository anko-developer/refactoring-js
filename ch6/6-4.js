// export function isDeliveryFree(anOrder) {
//   let basePrice = anOrder.basePrice;
//   return basePrice > 1000;
// }

// 굳이 변수로 추출할 필요가 없어서 인라인 처리
export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
