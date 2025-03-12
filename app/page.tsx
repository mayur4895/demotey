import { getSession } from "@auth0/nextjs-auth0";
import { getFullItemHistory } from "./services/getitemhistory";
 

const Home = async () => {
  // Await the session call to get the session data
  const session = await getSession(); 
  if (!session?.accessToken) {
    return (
      <div className="flex items-center justify-center h-[100vh] w-full">
        <h2 className="text-xl text-red-600">
          Access token is not available in the session.
        </h2>
      </div>
    );
  }

  const accessToken = session.accessToken;

  let itemHistory = null;
  let errorMessage = "";

  try {
    // Attempt to fetch item history
   const url =
      "http://traceyapi.com:8000/api/GetFullItemHistory?gtin=20051328703085&serial=046823445376";

    // Make the GET request to the external API with the Authorization header
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the access token in the Authorization header
      },
    });
   console.log(response.data)
  } catch (error) {
    // Catch any error thrown by the API call
    errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full   ">
      <div className="flex flex-col gap-6 items-center justify-center max-w-4xl p-6   shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center  ">
          Welcome, {session.user?.name}
        </h2>

        {/* Display user details */}
        <div className="mt-4 w-full p-4   rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold  ">User Details:</h3>
          <pre className="mt-2 border p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(session.user, null, 2)}
          </pre>
        </div>

        {/* Error message if any */}
        {errorMessage && (
          <div className="mt-6 w-full p-4 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-600">Error:</h3>
            <pre className="mt-2 text-sm text-red-600">{errorMessage}</pre>
          </div>
        )}

        {/* Display item history */}
        {itemHistory && (
          <div className="mt-6 w-full p-4  rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold ">Item History:</h3>
            <pre className="mt-2 border p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(itemHistory, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
