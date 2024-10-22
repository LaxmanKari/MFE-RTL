import { render, screen, waitFor, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("render 6 products on initial load", async () => {
  render(<App />);

  const titles = await screen.findAllByRole("heading");
  // console.log(titles);
  expect(titles).toHaveLength(6);
});

test("loads and renders another 6 products on clicking load more", async () => {
  render(<App />);

  const button = await screen.findByRole("button", { name: /load more/i });
  //   act(()=>{
  //     user.click(button);
  //   });
  user.click(button);

  await waitFor(async () => {
    const titles = await screen.findAllByRole("heading");
    expect(titles).toHaveLength(6);
  });
});
