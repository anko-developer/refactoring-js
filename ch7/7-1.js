class Organization {
  #data;
  #name;
  #country;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get rawData() {
    return { name: this.name, country: this.country };
  }
}

const test = new Organization({
  name: 'anko',
  country: 'seoul',
});

console.log(test.rawData);