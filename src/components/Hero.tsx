import Image from "next/image";
import Button from '@/components/HeroButton';

export default function Hero() {
    return (
        <div className="my-20 border h-[25rem] w-full md:flex">
            <div className="bg-stone-200 h-full items-start flex flex-col justify-center p-11 gap-4 md:w-[50%] md:p-20">
                <h2 className="font-semibold text-4xl">Create harmonious living</h2>
                <p className="text-lg leading-tight">
                    RAOUF Products are all made to standard sizes so that you can mix and match them freely.
                </p>
                <Button />
            </div>
            <div className="hidden md:block md:w-[50%] md:relative">
                <Image
                    src="/banner/banner1.jpg"
                    alt="banner1"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
}
