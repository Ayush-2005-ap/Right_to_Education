import { Navigate, useParams } from 'react-router-dom';

export const KeyProvisionsRedirect = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  return <Navigate to={`/resources?topic=${topicSlug}`} replace />;
};

export default KeyProvisionsRedirect;
