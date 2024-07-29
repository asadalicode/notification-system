
import { Outlet } from 'react-router-dom';




const ShellContainer=()=> {


  return (
    <>
    {/* header here */}
    <main className="flex flex-col w-full">
    <div className="flex-1">
    <Outlet />
    </div>
   {/* footer here */}

    </main>
    {/* <Footer /> */}
  </>
  );
}
export default ShellContainer;
