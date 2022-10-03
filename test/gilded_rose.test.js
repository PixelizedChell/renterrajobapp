const {gildedRose} = require('./texttest_fixture')

const {Shop, Item} = require("../src/gilded_rose");
const pass = "Backstage passes to a TAFKAL80ETC concert";
const sulfuras = "Sulfuras, Hand of Ragnaros";

describe("Gilded Rose", function() {
  it("should foo", function() {
    gildedRose.items.push(new Item("foo", 0, 0));
    const items = gildedRose.updateQuality();
    expect(items[items.length - 1].name).toBe("foo");
  });
  it("should degrade in quality after one day", function() {
    gildedRose.items.push(new Item("Apple", 5, 20))
    const items = gildedRose.updateQuality();
    expect(items[items.length - 1].quality).toBe(19)
  })
  it("should increase in quality after one day if it is Aged Brie", function() {
    gildedRose.items.push(new Item("Aged Brie", 5, 20))
    const items = gildedRose.updateQuality();
    expect(items[items.length - 1].quality).toBe(21)
  })

  it("should increase in quality by two if the item is a backstage pass and it is less than 10 days to the concert", function() {
    gildedRose.items.push(new Item(pass, 9, 20))
    const items = gildedRose.updateQuality();
    expect(items[items.length - 1].quality).toBe(22)
  })
  it("should increase in quality by three if the item is a backstage pass and it is less than 5 days to the concert", function() {
    gildedRose.items.push(new Item(pass, 4, 20))
    const items = gildedRose.updateQuality();
    expect(items[items.length - 1].quality).toBe(23)
  })
  it("should increase in quality by three if the item is a backstage pass and the concert has passed", function() {
    gildedRose.items.push(new Item(pass, 0, 20))
    const items = gildedRose.updateQuality();
    expect(items[items.length - 1].quality).toBe(0)
  })
  it("should increase in quality by three if the item is a backstage pass and the concert has passed", function() {
    gildedRose.items.push(new Item(pass, 0, 20))
    const items = gildedRose.updateQuality();
    expect(items[items.length -1].quality).toBe(0)
  })
});
