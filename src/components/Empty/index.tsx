import Image from "next/image";

export const Empty = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center select-none">
      <Image
        className="w-52 h-52"
        src="/svg/no_data.svg"
        width={200}
        height={200}
      />
      <span className="text-gray-400 font-roboto text-lg font-semibold mt-1">
        NO DATA
      </span>
    </div>
  );
};
