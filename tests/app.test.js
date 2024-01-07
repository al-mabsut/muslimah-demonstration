import App from "@src/index.js";
import { mount } from "enzyme";

describe("Initial Test of the App", () => {
  test("App can mount", () => {
    const context = mount(<App />);
    context.unmount()
  });
});
