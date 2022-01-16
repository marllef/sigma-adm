export const ListHeader = () => {
  const items: string[] = [
    "NOME",
    "TELEFONE",
    "CIDADE",
    "ATUALIZADO EM",
    "EDITAR",
    "EXCLUIR",
  ];

  function renderItems(item: string, index: number) {
    return (
      <li
        className={`flex-1 text-sm px-2 py-1 font-semibold text-slate-600 border-b`}
        key={index}
      >
        {item}
      </li>
    );
  }

  return (
    <>
      <ul className="flex bg-white">{items.map(renderItems)}</ul>
    </>
  );
};
