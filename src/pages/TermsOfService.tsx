import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => window.history.back()} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-strato-navy">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>By accessing and using Strato Systems' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Strato Systems provides:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Digital architecture toolkits and blueprints for software development</li>
                <li>Email-based consulting services for software architecture</li>
                <li>Pre-designed templates and documentation for SaaS and enterprise platforms</li>
                <li>Educational resources and best practices documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Obligations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not reverse engineer, decompile, or attempt to extract source code</li>
                <li>Not redistribute, resell, or share our proprietary materials without permission</li>
                <li>Respect intellectual property rights of Strato Systems and third parties</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Payment:</strong> All fees are due in full before service delivery</li>
                <li><strong>Currency:</strong> All prices are in USD unless otherwise specified</li>
                <li><strong>Refunds:</strong> Digital products are non-refundable once delivered</li>
                <li><strong>Consulting:</strong> Email consulting hours must be used within 12 months of purchase</li>
                <li><strong>Taxes:</strong> Prices exclude applicable taxes, which are the customer's responsibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p><strong>Our Rights:</strong> All content, trademarks, and intellectual property remain the property of Strato Systems LLC-FZ.</p>
              <p><strong>Your License:</strong> Upon payment, you receive a non-exclusive, non-transferable license to use our materials for your internal business purposes.</p>
              <p><strong>Restrictions:</strong> You may not redistribute, sell, or create derivative works from our materials without explicit written permission.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Service Delivery and Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Delivery:</strong> Digital products delivered via email within 24-48 hours</li>
                <li><strong>Support:</strong> Email-only support provided during business hours (UAE time)</li>
                <li><strong>Consulting:</strong> Email consulting responses within 2-5 business days</li>
                <li><strong>No Phone Support:</strong> We do not provide phone or video call support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Disclaimers and Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p>We do not guarantee that our architecture recommendations will be suitable for every use case or that implementations will be error-free.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>IN NO EVENT SHALL STRATO SYSTEMS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.</p>
              <p className="mt-4">Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Confidentiality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We respect the confidentiality of your project information and will not disclose your business details to third parties without your consent, except as required by law or as necessary to provide our services.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Either party may terminate the service relationship at any time. Upon termination, your right to use our materials ceases, but delivered digital products may be retained for your internal use in accordance with the license granted.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p>These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any changes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>For questions about these terms, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> legal@stratosystems.io</p>
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