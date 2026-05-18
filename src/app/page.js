import Banner from "@/components/homePage/Banner";
import AdoptPets from "@/components/homePage/extraStatic/AdoptPets";
import PetCareTips from "@/components/homePage/extraStatic/PetCareTips";
import SuccessStories from "@/components/homePage/extraStatic/SuccessStories";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AdoptPets></AdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
    </div>
  );
}
