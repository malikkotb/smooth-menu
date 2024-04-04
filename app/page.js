import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black opacity-80 h-screen m-0 flex items-center">
        <ul className="text-white flex flex-col gap-5">
          <li><a href="#" className="text-5xl ml-16">2022 Quiz Arena</a></li>
          <li><a href="#" className="text-5xl ml-16">2024 Note Taker</a></li>
          <li><a href="#" className="text-5xl ml-16">FoodPal Vue App</a></li>
          <li><a href="#" className="text-5xl ml-16">PyTorch Image CNN</a></li>
        </ul>
    </main>
  );
}
