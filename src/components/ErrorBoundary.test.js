import React from "react";
import renderer from "react-test-renderer";
import ErrorBoundary from "./ErrorBoundary";
import { shallow, mount } from "enzyme";

let wrapper;
let wrapperShallow;
let wrapperMountWithError;
beforeEach(() => {
  const TestComponent = () => {
    return <div>"Testing"</div>;
  };

  const ComponentWithError = () => {
    const error = new Error("This is a test error!");
    return <h1>{error}</h1>;
  };

  wrapper = renderer
    .create(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    )
    .toJSON();

  wrapperShallow = shallow(
    <ErrorBoundary>
      <TestComponent />
    </ErrorBoundary>
  );
  // Will print out the error, but is a good test for production.
  wrapperMountWithError = mount(
    <ErrorBoundary>
      <ComponentWithError />
    </ErrorBoundary>
  );
});

describe("Testing ErroeBoundary", () => {
  it("Snapshot with TestComponent", () => {
    expect(wrapper).toMatchSnapshot();
  });
  // Will print out the error, but is a good test for production.
  it("Error in component", () => {
    expect(wrapperMountWithError.find("h1").text()).toEqual(
      "Opsss.. this souldnt have happend"
    );
  });
});
