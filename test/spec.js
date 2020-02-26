var a = require("..");

describe("protractor css locator tests", () => {
  beforeEach(async function() {
    await browser.waitForAngularEnabled(false);
    await browser
      .manage()
      .timeouts()
      .implicitlyWait(15000);
    await browser.get("https://the-internet.herokuapp.com/login");
  });

  it("This should test grandparent locator by css selector", async () => {
    const password_grand_parent = element(by.grandParentOf("#password"));
    expect(await password_grand_parent.getAttribute("class")).toMatch("row");
  });

  it("This should test grandparent locator by prototype function", async () => {
    const password_grand_parent_sa = await element(
      by.css("#password")
    ).grandParent();
    console.log("i am parent");
    expect(await password_grand_parent_sa.getAttribute("class")).toMatch("row");
  });

  // it("This should test parent locator by css selector", async () => {
  //   const password_parent = await element(by.parentOf("#password"));
  //   expect(await password_parent.getAttribute("class")).toContain("large-6");
  // });

  // it("This should test parent locator by prototype function", async () => {
  //   const password_parent = await element(by.css("#password")).parent();
  //   expect(await password_parent.getAttribute("class")).toContain("large-6");
  // });

  // it("This should test nextSibling locator by css selector", async () => {
  //   const password_nxt_sibling1 = await element(
  //     by.nextSiblingOf("label[for='password']")
  //   );
  //   expect(await password_nxt_sibling1.getAttribute("name")).toMatch(
  //     "password"
  //   );
  // });

  // it("This should test nextSibling locator by prototype function", async () => {
  //   const password_nxt_sibling1 = await element(
  //     by.css("label[for='password']")
  //   ).nextSibling();
  //   expect(await password_nxt_sibling1.getAttribute("name")).toMatch(
  //     "password"
  //   );
  // });

  // it("This should test followingSibling locator by css selector", async () => {
  //   const elm1 = await element(by.css("label[for='password']")).element(
  //     by.followingSibling("input")
  //   );

  //   expect(await elm1.getAttribute("name")).toMatch("password");
  // });

  // it("This should test followingSibling locator by prototype function", async () => {
  //   const elm1 = await element(by.css("label[for='password']")).nextSibling();

  //   expect(await elm1.getAttribute("name")).toMatch("password");
  // });

  // it("This should test prevSibling locator by css selector", async () => {
  //   const password_prev_sibling = await element(
  //     by.prevSiblingOf("input[name='password']")
  //   );
  //   expect(await password_prev_sibling.getAttribute("for")).toMatch("password");
  // });

  // it("This should test prevSibling locator by prototype function", async () => {
  //   const password_prev_sibling = await element(
  //     by.css("input[name='password']")
  //   ).prevSibling();
  //   expect(await password_prev_sibling.getAttribute("for")).toMatch("password");
  // });

  // it("This should test firstChild locator by css selector", async () => {
  //   const elm = await element(by.firstChildOf(".example"));
  //   expect(await elm.getText()).toMatch("Login Page");
  // });

  // it("This should test firstChild locator by prototype function", async () => {
  //   const elm = await element(by.css(".example")).firstChild();
  //   expect(await elm.getText()).toMatch("Login Page");
  // });

  // it("This should test lastChild locator by css selector", async () => {
  //   const elm = await element(by.lastChildOf("#login"));
  //   expect(await elm.getText()).toMatch("Login");
  // });

  // it("This should test lastChild locator by prototype function", async () => {
  //   const elm = await element(by.css("#login")).lastChild();
  //   expect(await elm.getText()).toMatch("Login");
  // });
});
