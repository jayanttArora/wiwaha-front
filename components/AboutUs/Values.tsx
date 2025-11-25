import Image from "next/image";

export default function Values() {
  return (
    <div className="pb-28">
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="flex flex-col">
          {/* Our Values */}
          <div className="flex flex-row gap-16 mb-[100px]">
            {/* Left - Image */}
            <div className="w-[500px] h-[500px] relative overflow-hidden rounded-[10px]">
              <Image
                src="/images/about/values/values.jpg"
                alt="Our Values"
                fill
                className="object-cover transition-transform duration-500 scale-110 hover:scale-100 cursor-pointer"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <h2 className="text-left font-prata font-normal text-[32px] leading-[100%] 480:text-[40px] 650:text-[48px] 1080:text-[56px] 1440:text-[64px] tracking-[0%] text-[#4C5637] mb-8">
                Our Values
              </h2>

              {/* Passion Section */}
              <div className="flex flex-row items-start gap-3 mb-2">
                <Image
                  src="/icons/passion.svg"
                  alt="Passion"
                  width={24}
                  height={24}
                  className="object-contain 1440:w-[32px] 1080:w-[24px] 650:w-[20px] 480:w-[16px]"
                />
                <h3 className="font-prata font-normal text-[24px] text-[#4C5637]">
                  Passion
                </h3>
              </div>
              <p className="text-left font-roboto font-normal text-[16px] tracking-[1.2px] text-[#505050] mb-10">
                We pour our heart into every event, treating each celebration as
                if it were our own.
              </p>

              {/* Excellence Section */}
              <div className="flex flex-row items-start gap-3 mb-2">
                <Image
                  src="/icons/excellence.svg"
                  alt="Excellence"
                  width={24}
                  height={24}
                  className="object-contain 1440:w-[32px] 1080:w-[24px] 650:w-[20px] 480:w-[16px]"
                />
                <h3 className="font-prata font-normal text-[24px] text-[#4C5637]">
                  Excellence
                </h3>
              </div>
              <p className="text-left font-roboto font-normal text-[16px] tracking-[1.2px] text-[#505050] mb-10">
                We maintain the highest standards in service, decor, and
                hospitality.
              </p>

              {/* Community Section */}
              <div className="flex flex-row items-start gap-3 mb-2">
                <Image
                  src="/icons/community.svg"
                  alt="Community"
                  width={24}
                  height={24}
                  className="object-contain 1440:w-[32px] 1080:w-[24px] 650:w-[20px] 480:w-[16px]"
                />
                <h3 className="font-prata font-normal text-[24px] text-[#4C5637]">
                  Community
                </h3>
              </div>
              <p className="text-left font-roboto font-normal text-[16px] tracking-[1.2px] text-[#505050]">
                We celebrate the bonds that bring people together and create
                lasting memories.We pour our heart into every event, treating
                each celebration as if it were our own.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex flex-row gap-5">
            {/* Column 1 - 40% width */}
            <div className="w-[40%] h-[400px] flex flex-col gap-4">
              {/* Row 1 - Heading */}
              <div className="text-left">
                <h2 className="font-prata font-normal text-[64px] text-[#4C5637]">
                  Our Mission
                </h2>
              </div>

              {/* Row 2 - Paragraph */}
              <div className="text-left">
                <p className="font-roboto font-normal text-[20px] tracking-[1.1px] text-[#505050]">
                  To provide an unparalleled event experience by combining the
                  timeless beauty of Balinese architecture with world-class
                  amenities and personalized service.
                </p>
              </div>

              {/* Row 3 - Image */}
              <div className="w-full relative flex-1 overflow-hidden rounded-[10px]">
                <Image
                  src="/images/about/values/mission1.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-500 scale-110 hover:scale-100 cursor-pointer"
                />
              </div>
            </div>

            {/* Column 2 - 30% width */}
            <div className="w-[30%] h-[400px] flex flex-col">
              {/* Row 1 - Image */}
              <div className="w-full relative h-[250px] mb-4 overflow-hidden rounded-[10px]">
                <Image
                  src="/images/about/values/mission2.jpg"
                  alt="Mission 2"
                  fill
                  className="object-cover object-[center_40%] transition-transform duration-500 scale-110 hover:scale-100 cursor-pointer"
                />
              </div>

              {/* Row 2 - Paragraph */}
              <div className="text-left flex-1">
                <p className="font-roboto font-normal text-[20px] tracking-[1.1px] text-[#505050]">
                  We strive to be the premier destination for those seeking to
                  celebrate life's most precious moments in an atmosphere of
                  elegance, authenticity, and joy.
                </p>
              </div>
            </div>

            {/* Column 3 - 30% width */}
            <div className="w-[30%] h-[400px]">
              <div className="w-full h-full relative overflow-hidden rounded-[10px]">
                <Image
                  src="/images/about/values/mission3.jpg"
                  alt="Mission 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
