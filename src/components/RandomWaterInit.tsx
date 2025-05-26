import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateWater } from "@/store/slices/waterSlice";

function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export default function RandomWaterInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateRandom = () => {
      dispatch(updateWater({
        topic: "MU/WASTEWATER/WQ",
        value: {
          turbidity: randomFloat(0, 100),
          tss: randomFloat(0, 100),
        },
      }));
    };
    updateRandom();
    const interval = setInterval(updateRandom, 5000); 
    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
}
