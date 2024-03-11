import { useState } from "react"
import SideNavBar from "./components/SideNavBar"
import Dashboard from "./views/Dashboard"
import Incomes from "./views/Incomes"
import Payments from "./views/Payments"

function App() {

  const [viewToShow, setViewToShow] = useState(0)

  const handleView = (menuItemSelected) => {
    setViewToShow(menuItemSelected)
  }

  return (
    <section className="flex min-h-screen p-8 flex-col-reverse justify-between">
        <div className="flex justify-center">
          <SideNavBar
            handleView={handleView}
            viewToShow={viewToShow}
          />
        </div>

        <div className="">
          {
            viewToShow === 0 ? (<Dashboard />)
              : viewToShow === 1 ? (<Incomes />)
                : (<Payments />)
          }
        </div>
    </section>
  )
}

export default App
