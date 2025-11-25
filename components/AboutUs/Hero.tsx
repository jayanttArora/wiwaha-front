import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="w-full"
      style={{ paddingTop: "calc(var(--navbar-height) + 48px)" }}
    >
      <div className="flex flex-row justify-center items-center gap-4 px-4 max-w-7xl mx-auto">
        {/* Left Image - 3:5 aspect ratio */}
        <div className="relative shrink-0 aspect-3/5 h-[140px] 480:h-[220px] 650:h-[350px] 1080:h-[450px] 1440:h-[520px]">
          <Image
            src="/images/about/hero/img-left.png"
            alt="About Us Left"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle Image - 1:1 aspect ratio (Square) */}
        <div className="relative shrink-0 aspect-square h-[140px] 480:h-[220px] 650:h-[350px] 1080:h-[450px] 1440:h-[520px]">
          <Image
            src="/images/about/hero/img-middle.png"
            alt="About Us Middle"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Image - 3:5 aspect ratio */}
        <div className="relative shrink-0 aspect-3/5 h-[140px] 480:h-[220px] 650:h-[350px] 1080:h-[450px] 1440:h-[520px]">
          <Image
            src="/images/about/hero/img-right.png"
            alt="About Us Right"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
