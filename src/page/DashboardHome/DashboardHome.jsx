import RecentUsers from "../../component/Home/RecentUsers";
import RevenueSubTrend from "../../component/Home/RevenueSubTrend";
import Status from "../../component/Home/Status";
import Usertrend from "../../component/Home/Usertrend";

const DashboardHome = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold py-5 px-3">Overview</h1>
      <Status />
      <div className="grid lg:grid-cols-3 my-5 gap-5">
        <div className="lg:col-span-2">
          <RevenueSubTrend />
        </div>
        <div className="lg:col-span-1">
          <Usertrend />
        </div>
      </div>
      <div>
        <RecentUsers />
      </div>
    </section>
  );
};

export default DashboardHome;
