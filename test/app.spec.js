const { sum } = require("../app")
const assert = require("assert")

console.log("it adds 2 and 3", sum(2, 3) === 5)

it("adds 2 and 3", () => {
  assert.equal(sum(2, 3), 5)
})

it("takes strings too", () => {
  assert.equal(sum("2", "3"), "23")
})
// no

it("adds .1 and .2", () => {
  assert.equal(sum(.1, .2).toFixed(1), .3)
})

// bad, fraudulent ^