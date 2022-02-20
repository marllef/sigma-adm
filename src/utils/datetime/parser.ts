export const toLocaleDate = (date: Date) =>
  new Date(date).toLocaleDateString("pt-Br", {
    dateStyle: "medium",
  });
