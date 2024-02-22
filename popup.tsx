import { useEffect } from "react"
import { useFirebase } from "~firebase/hook"
import "./style.css"

export default function IndexPopup() {
  const { user, isLoading, onLogin, onLogout } = useFirebase()

  useEffect(() => {
    // Redirect to the web app if the user is not authenticated
    if (!user) {
      // chrome.tabs.create({ url: "https://lstn.ai/" })
    }
  }, [user])

  return (
    <div className="flex flex-col w-96 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to WellShare.ai Extension!
      </h1>
      {!user ? (
        <button
          onClick={() => onLogin()}
          className="bg-lstnGreen-600 hover:bg-lstnGreen-700 focus:ring-0 focus:outline-none text-white px-5 py-2.5 text-sm font-medium rounded-lg">
          Log in
        </button>
      ) : (
        <button
          onClick={() => onLogout()}
          className="bg-red-700 hover:bg-red-800 focus:ring-0 focus:outline-none text-white px-5 py-2.5 text-sm font-medium rounded-lg">
          Log out
        </button>
      )}
      <div className="mt-4">
        {user && isLoading ? (
          <div className="text-lg text-lstnGray-800 font-bold">Loading...</div>
        ) : null}
        {!!user && (
          <div className="text-lg text-lstnGray-800">
            <span className="text-lime-700 font-bold"> Welcome,</span>{" "}
            {user.displayName}! Your email address is {user.email}
          </div>
        )}
      </div>
      <footer className="mt-auto text-lstnGray-700">
        Crafted by @WellShare
      </footer>
    </div>
  )
}
