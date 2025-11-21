import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story",
  description: "Learn about our story and journey",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f3eeea]">
      <div className="pt-[50px] text-center">
        <h1 className="font-[family-name:var(--font-prata)] font-normal text-[64px] leading-[100%] tracking-[0%] text-[#4C5637]">
          Our Story
        </h1>
      </div>
    </div>
  );
}
