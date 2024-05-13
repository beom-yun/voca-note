import db from "@/lib/db";

export async function getSelectOptions() {
  const categories = await db.category.findMany({
    select: { id: true, title: true },
  });
  const options = [{ id: 0, title: "분류를 선택해주세요" }, ...categories];
  options.push({ id: options.length, title: "분류되지 않은 항목" });
  return options;
}
