import React from 'react';
import Head from '../InterfaceElements/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
import Loading from '../InterfaceElements/Loading';
import Erro from '../InterfaceElements/Erro';
const UserStatsGraphs = React.lazy(() => {
  import('./UserStatsGraphs');
});

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <Erro error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
