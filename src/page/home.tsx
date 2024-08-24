import { env } from "../config/env"

function Home() {

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {env.VITE_PARKING_SYSTEM_URL}
      </p>
    </>
  )
}

export default Home
