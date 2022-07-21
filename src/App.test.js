import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("renders loading text", () => {
  render(<Wrapper />);
  const divElement = screen.getByText(/loading.../i);
  expect(divElement).toBeInTheDocument();
});

test("renders heading text", async () => {
  render(<Wrapper />);
  const divElement = await screen.findByText(/search news/i);
  expect(divElement).toBeInTheDocument();
});
