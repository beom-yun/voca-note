import { getSelectOptions } from "@/lib/data";

export default async function Words() {
  const options = await getSelectOptions();
  console.log(options);
  return (
    <select className="w-full rounded-md bg-neutral-600 bg-transparent p-3">
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
