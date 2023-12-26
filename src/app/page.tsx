import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <h1 className="font-bold text-6xl text-yellow-500">
        Hello my name is Pakeeza
      </h1>
      <p>
        I am new here this is my first development experience and i will be able to continue to improve things in the future. Wish me good luck. Thank you!
      </p>
      <Button />
      <div>
       Please visit my website by clicking on the link below.
    <Button />
      </div>
    </main>
  );
}