import { ToolType } from "@/Types/ToolsType";
import image1 from "@/public/images/calories-calculator (1).png";
import image2 from "@/public/images/bmi.png";
import image3 from "@/public/images/diet.png";
import image4 from "@/public/images/muscles.png";
import image5 from "@/public/images/report.png";
import image6 from "@/public/images/reminders.png";

export const toolsData: ToolType[] = [
    {
        id: 1,
        title: "BMI Calculator",
        description: "Calculate your Body Mass Index to assess your weight status.",
        imageSrc: image1.src,
        link: "/BMI"
    },
    {
        id: 2,
        title: "Calorie Tracker",
        description: "Track your daily calorie intake and expenditure.",
        imageSrc: image2.src,
        link: "/CalorieTracker"
    },
    {
        id: 3,
        title: "Workout Planner",
        description: "Create and manage your personalized workout plans.",
        imageSrc: image3.src,
        link: "/WorkoutPlanner"
    },
    {
        id: 4,
        title: "Nutrition Guide",
        description: "Get tips on healthy eating and meal planning.",
        imageSrc: image4.src,
        link: "/NutritionGuide"
    },
        {
        id: 5,
        title: "Nutrition Guide",
        description: "Get tips on healthy eating and meal planning.",
        imageSrc: image5.src,
        link: "/NutritionGuide"
    },
        {
        id: 6,
        title: "Nutrition Guide",
        description: "Get tips on healthy eating and meal planning.",
        imageSrc: image6.src,
        link: "/NutritionGuide"
    },
];
