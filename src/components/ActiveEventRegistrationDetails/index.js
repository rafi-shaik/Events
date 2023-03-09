// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-icon"
      />
      <h1 className="register-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="close-icon"
      />
      <h1 className="close-heading">Registrations are Closed Now!</h1>
      <p className="close-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-icon"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderInitialView = () => (
    <p className="no-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderFunction = () => {
    switch (activeStatus) {
      case 'REGISTERED':
        return renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return renderClosedView()
      case 'YET_TO_REGISTER':
        return renderToRegisterView()
      default:
        return renderInitialView()
    }
  }

  return <div className="registration-status-container">{renderFunction()}</div>
}

export default ActiveEventRegistrationDetails
