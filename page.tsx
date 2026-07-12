import HeartRateCard from "@/components/HeartRateCard";
import FitnessChart from "@/components/FitnessChart";
import StatsCard from "@/components/StatsCard";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-2">
        AI Fitness Tracker
      </h1>

      <p className="text-gray-400 mb-8">
        Real-time heart rate monitoring dashboard
      </p>


      <div className="grid md:grid-cols-3 gap-6">

        <HeartRateCard />

        <StatsCard
          title="Calories Burned"
          value="640 kcal"
        />

        <StatsCard
          title="Workout Time"
          value="45 min"
        />

      </div>


      <div className="mt-10 bg-gray-900 p-6 rounded-xl">

        <h2 className="text-xl font-semibold mb-5">
          Heart Rate Activity
        </h2>

        <FitnessChart />

      </div>


    </main>
  );
}
