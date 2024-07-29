import React, { Suspense } from 'react';
import { IRoute } from "./@types/route";


import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShellContainer from './components/containers/shellContainer';
const CreateNotification = React.lazy(() => import('./pages/notifications/createNotification'));
const ViewNotification = React.lazy(() => import('./pages/notifications/viewNotification'));

const App =()=> {

const routes: IRoute[] = [
{
    link: "/",
    element: <ShellContainer />,
    children: [
      {
        link: "",
        element: <CreateNotification />,
      },
      {
        link: "view-notification",
        element: <ViewNotification />,
      }

    ]
},
]

  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map(({ link, element, children }: IRoute) => (
        <Route
          key={link}
          path={link}
          element={element}
        >
         {children &&
                children.length > 0 &&
                children.map(({ link, element }: IRoute) => (
                  <Route key={link} path={link} element={element} />
                ))}
        </Route>
      ))}
      {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
    </Routes>
    </Suspense>
  </BrowserRouter>
  )
}

export default App
