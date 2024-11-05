import ShowMenu from "../components/menu/ShowMenu";

export default function Home() {
  return (
    <div>
      <section className="max-w-[90rem] mx-auto px-4 2xl:px-0">
        <h1 className="font-semibold text-xl">Slajs Pizza</h1>
      </section>
      <section className="max-w-[90rem] mx-auto px-4 2xl:px-0">
        <ShowMenu />
      </section>
    </div>
  );
}
