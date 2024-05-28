import Layout from "../components/Layout";

export default function Error() {
  return (
    <Layout>
      <div className="container mx-auto  text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
      </div>
    </Layout>
  );
};

