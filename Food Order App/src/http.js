export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch meals. Please try again later");
  }

  return data;
}

export async function placeOrder(requestBody) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to place order. Please try again later");
  }

  return data;
}
