import { useParams } from 'react-router-dom';

const Page = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Ticket</h1>
    </div>
  );
};

export default Page;
