import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { HomePage } from '../pages/HomePage';
import { StateDirectoryPage } from '../pages/StateDirectoryPage';
import { StateDetailPage } from '../pages/StateDetailPage';
import { RTEMatrixPage } from '../pages/RTEMatrixPage';
import { KnowYourRTEPage } from '../pages/KnowYourRTEPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { JudgmentsPage } from '../pages/JudgmentsPage';
import { PolicyResearchPage } from '../pages/PolicyResearchPage';
import { PublicParticipationPage } from '../pages/PublicParticipationPage';
import { ArchivesPage } from '../pages/ArchivesPage';
import { BlogPage } from '../pages/BlogPage';
import { AboutPages } from '../pages/AboutPages';
import { RTIPage } from '../pages/RTIPage';
import { Coalition25Page } from '../pages/Coalition25Page';
import { SearchPage } from '../pages/SearchPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { KeyProvisionsRedirect } from '../components/KeyProvisionsRedirect';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <NotFoundPage />
      </RootLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Know Your RTE
      {
        path: 'know-your-rte',
        element: <KnowYourRTEPage />,
      },
      {
        path: 'know-your-rte/about',
        element: <KnowYourRTEPage />,
      },
      {
        path: 'know-your-rte/features',
        element: <KnowYourRTEPage />,
      },
      {
        path: 'know-your-rte/chronology',
        element: <KnowYourRTEPage />,
      },
      {
        path: 'know-your-rte/faq',
        element: <KnowYourRTEPage />,
      },
      // Resources & State Directory
      {
        path: 'resources',
        element: <ResourcesPage />,
      },
      {
        path: 'resources/centre',
        element: <ResourcesPage />,
      },
      {
        path: 'resources/states',
        element: <StateDirectoryPage />,
      },
      {
        path: 'resources/states/:stateSlug',
        element: <StateDetailPage />,
      },
      {
        path: 'resources/rte-matrix',
        element: <RTEMatrixPage />,
      },
      // Judgments & Judicial Precedents
      {
        path: 'judgments',
        element: <JudgmentsPage />,
      },
      // Policy & Research
      {
        path: 'research',
        element: <PolicyResearchPage />,
      },
      // Public Participation
      {
        path: 'ask-a-question',
        element: <PublicParticipationPage />,
      },
      {
        path: 'forum',
        element: <PublicParticipationPage />,
      },
      {
        path: 'report-a-grievance',
        element: <PublicParticipationPage />,
      },
      // Archives
      {
        path: 'archives',
        element: <ArchivesPage />,
      },
      {
        path: 'archives/news',
        element: <ArchivesPage />,
      },
      {
        path: 'archives/events',
        element: <ArchivesPage />,
      },
      {
        path: 'archives/polls',
        element: <ArchivesPage />,
      },
      {
        path: 'archives/videos',
        element: <ArchivesPage />,
      },
      // Blog
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/the-rte-blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/featured-blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/bloggers',
        element: <BlogPage />,
      },
      // About Pages
      {
        path: 'about',
        element: <AboutPages />,
      },
      {
        path: 'about/vision-and-mission',
        element: <AboutPages />,
      },
      {
        path: 'about/partners',
        element: <AboutPages />,
      },
      {
        path: 'about/platform-team',
        element: <AboutPages />,
      },
      {
        path: 'about/contact',
        element: <AboutPages />,
      },
      // RTI & Coalition 25
      {
        path: 'rti',
        element: <RTIPage />,
      },
      {
        path: 'coalition-25',
        element: <Coalition25Page />,
      },
      // Full Text Search
      {
        path: 'search',
        element: <SearchPage />,
      },
      // Legacy Key Provisions URLs (e.g. /admissions-key-provisions)
      {
        path: ':topicSlug-key-provisions',
        element: <KeyProvisionsRedirect />,
      },
      // 404 Catch-all
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
