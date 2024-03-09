import Barchart from '../components/Barchart';
import DashboardHeader from '../components/DashboardHeader';

const Dashboard = () => {

  return (
    <section className='grid grid-cols-4'>
      <DashboardHeader />

      <div className='border-2 rounded-xl col-span-4 my-4 p-4'>
        <Barchart />
      </div>
    </section>
  );
}

export default Dashboard;