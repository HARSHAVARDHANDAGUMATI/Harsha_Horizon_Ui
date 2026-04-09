import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { appRoutes } from './routes.config'
import ProtectedRoute from './ProtectedRoute'
import MainLayout from '../Components/Layout/MainLayout'
import AuthLayout from '../Components/Layout/AuthLayout'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {appRoutes
            .filter((route) => route.protected)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <ProtectedRoute>
                    <route.component />
                  </ProtectedRoute>
                }
              />
            ))}
        </Route>
        <Route element={<AuthLayout />}>
          {appRoutes
            .filter((route) => !route.protected)
            .map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
