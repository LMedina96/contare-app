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
    <section className="grid grid-cols-12 p-4 ps-0">
      <div className="col-span-1"></div>
      <SideNavBar
        handleView={handleView}
        viewToShow={viewToShow}
      />

      <section className="col-span-11">
        {
          viewToShow === 0 ? (<Dashboard />)
            : viewToShow === 1 ? (<Incomes />)
              : (<Payments />)
        }
      </section>
    </section>
  )
}

export default App
