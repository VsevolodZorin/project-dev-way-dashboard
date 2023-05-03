import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from 'src/containers/Auth';
import Dashboard from 'src/containers/Dashboard';

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
