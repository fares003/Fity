import { Service } from "@/Types/ServicesType";
import cardio from "@/public/images/cardio.png";
import fit1 from "@/public/images/fit1.png";
import fit2 from "@/public/images/fit2.png";
import fit3 from "@/public/images/fit3.png";

const servicesData: Service[] = [
    {
        id: 1,
        title: "Losing Weight",
        subtitle: "Click to join our Losing Weight plans",
        description: "Achieve sustainable weight loss with our expert customized programs, Designed to help you burn fat and build a healthier lifestyle.start your journey to a fitter you Journey.",
        image: cardio.src,
    },
    {
        id: 2,
        title: "Building Muscle",
        subtitle: "Click to join our Losing Weight plans",
        description: "Achieve sustainable weight loss with our expert customized programs, Designed to help you burn fat and build a healthier lifestyle.start your journey to a fitter you Journey.",
        image: fit1.src,
    },
    {
        id: 3,
        title: "Training in home",
        subtitle: "Click to join our Losing Weight plans",
        description: "Achieve sustainable weight loss with our expert customized programs, Designed to help you burn fat and build a healthier lifestyle.start your journey to a fitter you Journey.",
        image: fit2.src,
    },
        {
        id: 4,
        title: "Gym plan",
        subtitle: "Click to join our Losing Weight plans",
        description: "Achieve sustainable weight loss with our expert customized programs, Designed to help you burn fat and build a healthier lifestyle.start your journey to a fitter you Journey.",
        image: fit3.src,
    },
];

export default servicesData;
