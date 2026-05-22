import React from "react";
import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const stories = [
  {
    name: "Michael Johnson",
    pet: "Buddy",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    desc: "Buddy became my best friend and brought endless joy to our home.",
  },
  {
    name: "Sophia Williams",
    pet: "Luna",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    desc: "Luna is playful, loving, and a perfect companion every day.",
  },
  {
    name: "Daniel Brown",
    pet: "Rocky",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    desc: "Rocky is loyal and protective. He completed our family.",
  },
  {
    name: "Emily Davis",
    pet: "Coco",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    desc: "Coco is gentle and full of love, bringing happiness daily.",
  },
  {
    name: "John Smith",
    pet: "Max",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    desc: "Max is energetic and always makes us smile.",
  },
  {
    name: "Olivia Brown",
    pet: "Bella",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    desc: "Bella loves kids and brings happiness to our home.",
  },
  {
    name: "Ethan Wilson",
    pet: "Charlie",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400&auto=format&fit=crop",
    desc: "Charlie is smart, calm, and very friendly with everyone.",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full py-20 bg-gray-200 dark:bg-black ">
      <div className="max-w-7xl mx-auto ">
      
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold">Success Stories </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto dark:text-white/70">
            Explore real adoption experiences from Petopia users who found
            loyal, loving companions through our platform.
          </p>
        </div>

       
        <div className="mt-14">
          <Marquee speed={50} pauseOnHover={true}>
            <div className="flex gap-3">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] h-[280px] rounded-full bg-white border border-gray-200 shadow-md hover:shadow-2xl transition flex flex-col items-center justify-center text-center p-6 mx-4 dark:bg-gray-800 dark:text-white/70 dark:border-white/30"
                >
                
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />

                
                  <h3 className="mt-3 text-lg font-bold">{story.name}</h3>

                  <p className="text-blue-500 text-sm font-medium">
                    Adopted {story.pet}
                  </p>

                
                  <p className="mt-2 text-gray-600 text-xs leading-relaxed px-4 dark:text-white/80">
                    {story.desc}
                  </p>

                
                  <div className="flex gap-1 mt-3 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
