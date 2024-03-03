import Image from 'next/image';
const Logo = () => (
  <div className="my-3 flex items-center justify-start gap-x-2">
    <Image alt="logo.png" height={30} src="/assets/logo.png" width={30} />
    <h1 className=" text-center text-xl font-medium">Dropped Money</h1>
  </div>
);

export default Logo;
