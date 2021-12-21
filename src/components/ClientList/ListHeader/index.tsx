export const ListHeader = () => {
  return (
    <>
      <div className="flex flex-row shadow border-b border-gray-300 select-none py-1 text-sm px-3 font-bold justify-between">
        <div className="flex">
          <div className=" w-72">Nome</div>
          <div className=" w-44">Telefone</div>
          <div className=" w-44">Cidade</div>
          <div className=" w-32">Atualizado em</div>
        </div>
        <div className="flex w-72 items-center justify-center">Ações</div>
      </div>
    </>
  );
};
