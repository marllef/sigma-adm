interface Props {
  name: string;
  tel: string | null;
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
  function parseDate(date: Date) {
    const strDate = date.toString();

    const newDate = strDate.replace(
      /(\d\d\d\d)[-](\d\d)[-](\d\d)[T](\d\d)[:](\d\d)[:]\S{0,}/g,
      "$3/$2/$1 $4:$5"
    );

    return newDate;
  }

  return (
    <>
      <div className="flex flex-row justify-between" {...props}>
        <div className="flex">
          <div className="w-72 truncate">{name}</div>
          <div className="w-44 truncate">{tel}</div>
          <div className="w-44 truncate">{location}</div>
          <div className="w-32 truncate">{parseDate(updated_at)}</div>
        </div>
        <div className="flex w-72 mx-4 items-center justify-center">
          <span className="ml-36 font-semibold text-sky-600">Editar</span>
          <span className="mx-10 font-semibold text-red-500">Excluir</span>
        </div>
      </div>
    </>
  );
};
