export const searchIn = (data: any[], search: string) => {
  return data.map((item) => {
    if (typeof item === "string") {
      return item.toLowerCase().includes(search.toLowerCase());
    } else if (typeof item === "object") {
      const values = Object.values<string>(item).map((item) =>
        item?.toLowerCase()
      );
      return values.includes(search);
    } else {
      return false;
    }
  });
};
