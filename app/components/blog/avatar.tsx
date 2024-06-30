import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center'>
      <Link href={"https://www.linkedin.com/in/sergio-hackstler/"}>
        <Image
          src={picture}
          className='rounded-l-full mr-4'
          alt={name}
          width={50}
          height={50}
          priority
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/sergio-hackstler/"}>
        <div className='text-xl font-bold'>{name}</div>
      </Link>
    </div>
  );
};

export default Avatar;
