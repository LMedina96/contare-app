import { useState } from "react"
import SideNavBar from "./components/SideNavBar"
import Dashboard from "./views/Dashboard"
import Incomes from "./views/Incomes"
import Payments from "./views/Payments"

function App() {

  const [viewToShow, setViewToShow] = useState(0)

  const handleView = (menuItemSelected) => {
    setViewToShow(menuItemSelected)
    console.log(viewToShow)
  }

  return (
    <>
      <SideNavBar
        handleView={handleView}
        viewToShow={viewToShow}
      />

      <section className="px-32 py-16">
        {
          viewToShow === 0 ? (<Dashboard />)
            : viewToShow === 1 ? (<Incomes />)
              : (<Payments />)
        }
      </section>
    </>
  )
}

export default App
