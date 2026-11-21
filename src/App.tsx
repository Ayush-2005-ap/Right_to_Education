import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AccessibilityProvider, LanguageProvider } from './context';

export function App() {
  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </AccessibilityProvider>
  );
}

export default App;
