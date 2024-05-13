import Link from "next/link";

export default function Navigation() {
  return (
    <div className="fixed bottom-0 mx-auto grid w-full grid-cols-4 items-center justify-between border-t border-neutral-600 bg-neutral-800 p-3">
      <Link href="/words" className="flex flex-col items-center">
        단어장
      </Link>
      <Link href="/quiz" className="flex flex-col items-center">
        퀴즈
      </Link>
      <Link href="/words" className="flex flex-col items-center">
        메뉴3
      </Link>
      <Link href="/words" className="flex flex-col items-center">
        메뉴4
      </Link>
    </div>
  );
}
