import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then((response) => console.log(response.data));
  }, []);

  return (
    <div className="App">
      <h1>Study Schedule</h1>
    </div>
  );
}

export default App;
