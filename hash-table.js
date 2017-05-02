function HashTable(size) {
  this.buckets = Array(size);
  this.numOfBuckets = this.buckets.length;
}

let ht = new HashTable(20);
console.log(ht);
