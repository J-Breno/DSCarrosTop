import CardCar from "../../components/CardCar";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-6 gap-6">
            <h2 className="text-zinc-600 font-bold text-xl lg:text-3xl">
              Venha nos visitar
            </h2>
            <CardCar />
            <CardCar />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center p-6 gap-6 bg-zinc-400">
          <h2 className="text-zinc-600 text-xl lg:text-3xl font-bold">
            O que estão dizendo
          </h2>
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </section>
      </main>
      <Footer />
    </>
  );
}
