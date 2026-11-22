import React, { useState } from 'react';
import {
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';

export const RTIPage: React.FC = () => {
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const sampleTemplate = `To,
The Public Information Officer (PIO),
Office of the District Education Officer (DEO),
[Insert District and State Name]

Subject: Application under Section 6(1) of the Right to Information Act, 2005 regarding Section 12(1)(c) RTE Admissions.

Respected Sir/Madam,

Please provide the following information pertaining to the implementation of Section 12(1)(c) of the Right of Children to Free and Compulsory Education Act, 2009 in [Insert Block/District Name] for the Academic Year [Insert Year e.g. 2024-25]:

1. Total number of private unaided non-minority schools registered for Section 12(1)(c) admissions in the district.
2. Total number of entry-level seats notified and reserved under the 25% quota in each school.
3. Total number of applications received from Economically Weaker Section (EWS) and Disadvantaged Group (DG) categories.
4. Total number of children allotted seats and admitted through the computerized lottery.
5. School-wise details of per-child fee reimbursement funds sanctioned, disbursed, and pending under Section 12(2) for the last three financial years.
6. Details of complaints/grievances filed regarding denial of admission, and the status of disposal under Section 32 of the RTE Act.

I am an Indian citizen. I have deposited the prescribed RTI application fee of ₹10 via [Postal Order / Demand Draft / Online Receipt No: _______].

Date: [Insert Date]
Name: [Insert Your Name]
Address: [Insert Complete Address]
Phone: [Insert Phone Number]`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleTemplate);
    setCopiedTemplate('template-1');
    setTimeout(() => setCopiedTemplate(null), 2500);
  };

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Right to Information (RTI) Transparency Cell"
          category="Public Transparency · RTI Act, 2005"
          description="Empowering citizens, parents, and researchers to access public records regarding RTE implementation, Section 12(1)(c) lottery allocations, School Management Committee minutes, and government fee reimbursements."
        />

        <Alert variant="statutory" badgeText="Statutory Oversight Tool">
          The Right to Information Act, 2005 is a vital civic instrument for monitoring the Right to Education Act, 2009. Public authorities, including District Education Offices, Block Education Offices, and State Commissions, are legally required to provide certified information within 30 days of receiving an application.
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Template Box */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-serif text-headline-sm font-bold text-primary">
                Model RTI Application Format: Section 12(1)(c) Monitoring
              </h3>
              <Button
                variant={copiedTemplate ? 'primary' : 'outline'}
                size="sm"
                onClick={copyToClipboard}
                leftIcon={copiedTemplate ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              >
                {copiedTemplate ? 'Copied to Clipboard' : 'Copy Application Text'}
              </Button>
            </div>

            <p className="text-body-sm text-on-surface-variant font-sans">
              You can copy, customize, and submit this application to your local District Education Officer (DEO) or Block Education Officer (BEO):
            </p>

            <pre className="p-4 bg-surface-container-low rounded-[4px] border border-border-subtle font-mono text-code-md text-on-surface whitespace-pre-wrap break-words leading-relaxed overflow-x-auto w-full max-w-full">
              {sampleTemplate}
            </pre>
          </div>

          {/* Sidebar Guidance */}
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
              <h4 className="font-serif text-headline-xs font-bold text-primary">
                Essential RTI Filing Tips
              </h4>
              <ul className="text-body-sm text-on-surface space-y-2 font-sans list-disc list-inside">
                <li>Address the application to the Public Information Officer (PIO) of the Department of School Education.</li>
                <li>Affix a ₹10 court fee stamp or attach an Indian Postal Order (IPO) payable to the Accounts Officer.</li>
                <li>Always retain a photocopy and get a stamped acknowledgement receipt from the office.</li>
                <li>If unaddressed after 30 days, file a First Appeal under Section 19(1) of the RTI Act.</li>
              </ul>
            </div>

            <div className="bg-surface-container-low p-6 rounded-[4px] border border-border-subtle space-y-2">
              <h4 className="font-serif text-headline-xs font-bold text-primary">
                Online RTI Filing
              </h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                For Central institutions (MoE, Kendriya Vidyalayas, Navodaya Vidyalayas, NCPCR), applications can be filed online via the central portal:
              </p>
              <a
                href="https://rtionline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline pt-1"
              >
                <span>Visit RTI Online Portal (rtionline.gov.in)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RTIPage;
