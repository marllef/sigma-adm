export const Empty = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center select-none">
      <img className="w-52 h-52" src="/svg/no_data.svg" />
      <span className="text-gray-400 font-roboto text-lg font-semibold mt-1">NO DATA</span>
    </div>
  );
};
