import Banner from "@/components/homePage/Banner";
import AdoptPets from "@/components/homePage/extraStatic/AdoptPets";
import ExtraOne from "@/components/homePage/extraStatic/ExtraOne";
import FAQ from "@/components/homePage/extraStatic/FAQ";
import PetCareTips from "@/components/homePage/extraStatic/PetCareTips";
import SuccessStories from "@/components/homePage/extraStatic/SuccessStories";
import FeaturedPet from "@/components/homePage/FeaturedPet";
import FrammerMotion from "@/components/homePage/FrammerMotion";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      {/* <FrammerMotion></FrammerMotion> */}
      <FeaturedPet></FeaturedPet>
      <AdoptPets></AdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <ExtraOne></ExtraOne>
      <FAQ></FAQ>
    </div>
  );
}
