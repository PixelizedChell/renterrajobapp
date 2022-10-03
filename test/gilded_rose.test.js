const {Shop, Item} = require("../src/gilded_rose");
const pass = "Backstage passes to a TAFKAL80ETC concert";
const sulfuras = "Sulfuras, Hand of Ragnaros";

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

  it("should increase in quality by two if the item is a backstage pass and it is less than 10 days to the concert", function() {
    const gildedRose = new Shop([new Item(pass, 9, 20)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22)
  })
  it("should increase in quality by three if the item is a backstage pass and it is less than 5 days to the concert", function() {
    const gildedRose = new Shop([new Item(pass, 4, 20)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23)
  })
  it("should increase in quality by three if the item is a backstage pass and the concert has passed", function() {
    const gildedRose = new Shop([new Item(pass, 0, 20)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
});
