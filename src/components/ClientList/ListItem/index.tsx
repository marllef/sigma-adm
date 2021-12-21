interface Props {
  name: string;
  tel: string;
  location: string;
  updated_at: Date;
}

export const ClientListItem = ({
  name,
  tel,
  location,
  updated_at,
  ...props
}: Props) => {
  return (
    <>
      <div className="flex flex-row justify-between" {...props}>
        <div className="flex">
          <div className="w-72 truncate">{name}</div>
          <div className="w-44 truncate">{tel}</div>
          <div className="w-44 truncate">{location}</div>
          <div className="w-32 truncate">{updated_at}</div>
        </div>
        <div className="flex w-72 mx-4 items-center justify-center">
          <span className="ml-36 font-semibold text-sky-600">Editar</span>
          <span className="mx-10 font-semibold text-red-500">Excluir</span>
        </div>
      </div>
    </>
  );
};
