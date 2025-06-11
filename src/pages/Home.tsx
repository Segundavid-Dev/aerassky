import HomeNav from "../components/home/HomeHeader";
import Hero from "../components/home/Hero";
import ReasonsToChoose from "../components/home/Reasons";
import Services from "../components/home/Services";
import Works from "../components/home/Works";

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
      <Services />
      <Works />
    </div>
  );
}
