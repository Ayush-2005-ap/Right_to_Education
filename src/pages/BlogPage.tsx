import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  User,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export const BlogPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'all' | 'the-rte-blog' | 'featured' | 'bloggers' = location.pathname.includes('/the-rte-blog')
    ? 'the-rte-blog'
    : location.pathname.includes('/featured-blog')
    ? 'featured'
    : location.pathname.includes('/bloggers')
    ? 'bloggers'
    : 'all';

  const blogPosts = [
    {
      id: 'post-1',
      title: 'Navigating Section 12(1)(c) Compliance: Why Transparent Lottery Portals Matter',
      author: 'Ayush Pandey',
      role: 'Legal Policy Fellow',
      date: '14 January 2026',
      category: 'Implementation Analysis',
      readTime: '6 min read',
      excerpt: 'An investigation into state digital admission systems reveals how centralised online lotteries curb parental intimidation, eliminate opaque offline queues, and strengthen documentation tracking for per-child reimbursement claims.',
      featured: true,
    },
    {
      id: 'post-2',
      title: 'Revisiting the 2019 Section 16 Amendment: Lessons from Five Years of State Implementation',
      author: 'Dr. Sunita Rao',
      role: 'Senior Education Specialist',
      date: '28 November 2025',
      category: 'Statutory Commentary',
      readTime: '8 min read',
      excerpt: 'Evaluating the educational impact of empowering States to detain pupils in Class 5 and Class 8. Are remedial instruction safeguards genuinely being deployed before secondary assessments take place?',
      featured: true,
    },
    {
      id: 'post-3',
      title: 'Decentralised School Governance: Can SMCs Transform Rural Learning Environments?',
      author: 'Vikramjit Singh',
      role: 'Civic Governance Researcher',
      date: '10 October 2025',
      category: 'Field Case Study',
      readTime: '5 min read',
      excerpt: 'Field insights from 40 government schools examining how 75% parent representation and active women leadership in School Management Committees directly correlates with teacher presence and midday meal hygiene.',
      featured: false,
    },
  ];

  const bloggers = [
    {
      name: 'Ayush Pandey',
      title: 'Research Lead & Legal Analyst',
      organization: 'Centre for Civil Society',
      articlesCount: 12,
      bio: 'Focuses on Article 21-A constitutional jurisprudence, subordinate state rules codification, and private school regulatory dynamics.',
    },
    {
      name: 'Dr. Sunita Rao',
      title: 'Senior Education Policy Fellow',
      organization: 'RTE Resource Coalition',
      articlesCount: 18,
      bio: 'Two decades of research in elementary curriculum design, teacher eligibility norms, and systemic monitoring under Section 31.',
    },
    {
      name: 'Vikramjit Singh',
      title: 'Grassroots Governance Researcher',
      organization: 'Civic Learning Trust',
      articlesCount: 9,
      bio: 'Specialises in SMC capacity-building, community social audits, and grievance redressal mechanisms across Northern and Central States.',
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="The RTE Blog & Commentary Desk"
          category="Public Opinion &amp; Scholarly Insights"
          description="Analytical essays, legal commentaries, and field dispatches examining right-to-education governance, court precedents, and grassroots school accountability across India."
        />

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none">
          <Link
            to="/blog"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            All Articles
          </Link>
          <Link
            to="/blog/the-rte-blog"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'the-rte-blog'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            The RTE Blog
          </Link>
          <Link
            to="/blog/featured-blog"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'featured'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Featured Analysis
          </Link>
          <Link
            to="/blog/bloggers"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'bloggers'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Contributing Bloggers
          </Link>
        </div>

        {/* Blog Posts Display */}
        {activeTab !== 'bloggers' && (
          <div className="space-y-6">
            {blogPosts
              .filter((post) => (activeTab === 'featured' ? post.featured : true))
              .map((post) => (
                <article
                  key={post.id}
                  className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle hover:border-primary transition-all shadow-subtle space-y-3"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant={post.featured ? 'secondary' : 'neutral'}>
                      {post.category}
                    </Badge>
                    <span className="text-xs text-outline font-sans">
                      {post.date} · {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-headline-md font-bold text-primary hover:underline cursor-pointer">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-sans text-on-surface-variant">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span className="font-semibold text-primary">{post.author}</span>
                    <span>·</span>
                    <span>{post.role}</span>
                  </div>

                  <p className="font-sans text-body-md text-on-surface leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary cursor-pointer">
                      <span>Read Full Commentary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
          </div>
        )}

        {/* Contributing Bloggers */}
        {activeTab === 'bloggers' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bloggers.map((blogger, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3 shadow-subtle"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-lg">
                  {blogger.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-headline-sm font-bold text-primary">
                    {blogger.name}
                  </h4>
                  <p className="text-xs font-semibold text-secondary">{blogger.title}</p>
                  <p className="text-xs text-outline">{blogger.organization}</p>
                </div>
                <p className="text-body-sm text-on-surface-variant font-sans leading-relaxed">
                  {blogger.bio}
                </p>
                <div className="pt-2 border-t border-border-subtle text-xs text-outline">
                  <strong>{blogger.articlesCount}</strong> Published Legal Essays
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogPage;
