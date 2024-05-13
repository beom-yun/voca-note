import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/words">입장하기</Link>
    </div>
  );
}
