import { Empty } from "~/components/Empty";

export const EmptyList = () => {
  return (
    <tr className="flex h-full my-5">
      <td className="w-full h-full">
        <Empty />
      </td>
    </tr>
  );
};
