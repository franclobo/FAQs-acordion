import Image from "next/image";
import Start from "../public/assets/images/icon-star.svg";
import Minus from "../public/assets/images/icon-minus.svg";
import Plus from "../public/assets/images/icon-plus.svg";

export default function Home() {
  return (
    <main className="content-container flex flex-col items-left justify-between">
      <h1 className="flex text-4xl font-bold mb-10">
        <Image src={Start} alt="Start" className="mr-10"/>
        FAQs
      </h1>
      <div className="flow-root">
  <div className="-my-8 divide-y divide-gray-100">
    <details className="group py-8 [&_summary::-webkit-details-marker]:hidden" open>
      <summary className="grayish-purple flex cursor-pointer items-center justify-between text-gray-900">
        <h2 className="text-lg font-medium">What is Frontend Mentor, and how will it help me?</h2>

        <span className="relative size-5 shrink-0">
          <Image src={Minus} alt="Minus" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
          <Image src={Plus} alt="Plus" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
      Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.
      </p>
    </details>

    <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
      <summary className="grayish-purple flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="text-lg font-medium">Is Frontend Mentor free?</h2>

        <span className="relative size-5 shrink-0">
        <Image src={Minus} alt="Minus" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
          <Image src={Plus} alt="Plus" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
      Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
      </p>
    </details>
    <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
      <summary className="grayish-purple flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="text-lg font-medium">Can I use Frontend Mentor projects in my portfolio?</h2>

        <span className="relative size-5 shrink-0">
        <Image src={Minus} alt="Minus" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
          <Image src={Plus} alt="Plus" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
      Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!
      </p>
    </details>
    <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
      <summary className="grayish-purple flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="text-lg font-medium">How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>

        <span className="relative size-5 shrink-0">
        <Image src={Minus} alt="Minus" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
          <Image src={Plus} alt="Plus" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
      The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.
      </p>
    </details>
  </div>
</div>
    </main>
  );
}
