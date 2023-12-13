import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex gap-2 px-6 py-3">
      <Image src="/logoLight.svg" alt="logo" width={40} height={40} />
      <span className="font-inter text-xl font-normal italic text-[#4F46E5]">
        RingKu
      </span>
    </div>
  );
};
