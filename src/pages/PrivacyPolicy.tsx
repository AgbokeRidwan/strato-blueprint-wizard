import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => window.history.back()} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-strato-navy">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact Information:</strong> Name, email address, company name</li>
                <li><strong>Project Details:</strong> Information about your software architecture needs</li>
                <li><strong>Communication Records:</strong> Email correspondence and consultation records</li>
                <li><strong>Payment Information:</strong> Billing details processed through secure third-party providers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our architecture toolkit and consulting services</li>
                <li>Communicate with you about your projects and requests</li>
                <li>Process payments and deliver digital products</li>
                <li>Improve our services and develop new offerings</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure backup and recovery procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at: <span className="font-semibold">privacy@stratosystems.io</span></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Project-related information may be retained for up to 7 years for business and legal compliance purposes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. International Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>As we operate from Dubai, UAE, your information may be transferred to and processed in the UAE and other countries. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We use minimal tracking technologies to improve user experience. This includes essential cookies for website functionality and analytics to understand how our services are used. You can manage cookie preferences through your browser settings.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the new policy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@stratosystems.io</p>
                <p><strong>Company:</strong> Strato Systems LLC-FZ</p>
                <p><strong>Address:</strong> Dubai, UAE</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}