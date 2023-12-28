import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Ticket</h1>
    </div>
  );
};

export default Page;
