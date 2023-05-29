export class Site {
  #customer;
  constructor(customer) {
    this.#customer = customer;
  }

  get customer() {
    return this.#customer === 'unknown' 
    ? new UnknownCustomer() 
    : new Customer(this.#customer);
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  const customerName = aCustomer.name;

  return customerName;
}
