const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  it("should degrade in quality after one day", function() {
    const gildedRose = new Shop([new Item("Apple", 5, 20)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19)
  })
  it("should increase in quality after one day if it is Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 20)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21)
  })
});
