import carImg from "../../assets/car.svg";

export default function CardCar() {
  return (
    <div className="flex flex-col items-center justify-center w-72 h-60 lg:w-auto lg:h-auto lg:px-44 border border-dscarrostop rounded-lg">
      <img src={carImg} alt="Car" />
      <p className="text-base lg:text-xl font-bold text-zinc-600">
        Lorem ipsum dolor
      </p>
    </div>
  );
}
