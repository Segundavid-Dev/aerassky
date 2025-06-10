import HomeNav from "../components/home/HomeHeader";
import Hero from "../components/home/Hero";
import ReasonsToChoose from "../components/home/Reasons";

export default function Home() {
  return (
    <div>
      <div className="bg-[url(/images/hero.png)] bg-no-repeat">
        <header>
          <HomeNav />
        </header>
        <Hero />
      </div>
      <ReasonsToChoose />
    </div>
  );
}
