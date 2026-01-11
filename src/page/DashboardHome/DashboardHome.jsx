import RevenueSubTrend from "../../component/Home/RevenueSubTrend";
import Status from "../../component/Home/Status";

const DashboardHome = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold py-5 px-3">Overview</h1>
      <Status />
      <div>
        <RevenueSubTrend />
      </div>
    </section>
  );
};

export default DashboardHome;
