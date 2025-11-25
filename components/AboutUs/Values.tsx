import Image from "next/image";

export default function Values() {
  return (
    <div className="py-28">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="flex flex-col">
          {/* Our Values */}
          <div className="flex flex-row gap-16 mb-16">
            {/* Left - Image */}
            <div className="w-[540px] h-[540px] relative overflow-hidden rounded-[10px]">
              <Image
                src="/images/about/values/values.jpg"
                alt="Our Values"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <h2 className="text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-8">
                Our Values
              </h2>

              <p className="text-left font-roboto font-normal text-[16px] tracking-[1.2px] text-[#505050] mb-6">
                We pour our heart into every event, treating each celebration as
                if it were our own.
              </p>

              <p className="text-left font-roboto font-normal text-[16px] tracking-[1.2px] text-[#505050] mb-6">
                We maintain the highest standards in service, decor, and
                hospitality.
              </p>

              <p className="text-left font-roboto font-normal text-[16px] tracking-[1.2px] text-[#505050]">
                We celebrate the bonds that bring people together and create
                lasting memories.We pour our heart into every event, treating
                each celebration as if it were our own.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div>{/* Our Mission content will go here */}</div>
        </div>
      </div>
    </div>
  );
}
