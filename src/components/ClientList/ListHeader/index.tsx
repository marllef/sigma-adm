export const ListHeader = () => {
  return (
    <>
      <div className="flex flex-row shadow border-b text-gray-500  border-gray-300 select-none py-1 text-sm px-3 font-bold justify-between">
        <div className="flex">
          <div className=" w-72">NOME</div>
          <div className=" w-44">TELEFONE</div>
          <div className=" w-44">CIDADE</div>
          <div className=" w-32">ATUALIZADO EM</div>
        </div>
        <div className="flex w-72 items-center justify-center">AÇÕES</div>
      </div>
    </>
  );
};
