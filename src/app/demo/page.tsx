'use client';

import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Badge } from '@/components/ui/Badge';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingState } from '@/components/ui/LoadingState';
import { Message } from '@/components/ui/Message';
import { BookOpen, Package } from 'lucide-react';

export default function DemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <AppLayout>
      <PageHeader
        subtitle="Design System"
        title="Component Library"
        action={
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        {/* Buttons Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Buttons</h2>
          <div className="rule mb-6" />
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
            <Button variant="outline" size="sm">Small Outline</Button>
            <Button variant="outline" size="md">Medium Outline</Button>
            <Button variant="outline" size="lg">Large Outline</Button>
          </div>
        </section>

        {/* Badges Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Badges</h2>
          <div className="rule mb-6" />
          <div className="flex flex-wrap gap-3">
            <Badge variant="blue">Reading</Badge>
            <Badge variant="pink">Finished</Badge>
            <Badge variant="yellow">Not Started</Badge>
            <Badge variant="teal">Archived</Badge>
          </div>
        </section>

        {/* Form Elements Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Form Elements</h2>
          <div className="rule mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Book Title" placeholder="Enter book title" />
            <Input label="Author" placeholder="Enter author name" />
            <Select
              label="Genre"
              options={[
                { value: '', label: 'Select a genre' },
                { value: 'fiction', label: 'Fiction' },
                { value: 'non-fiction', label: 'Non-fiction' },
                { value: 'poetry', label: 'Poetry' },
                { value: 'other', label: 'Other' },
              ]}
            />
            <Input label="Total Pages" type="number" placeholder="300" />
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Cards</h2>
          <div className="rule mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-2">The Great Gatsby</h3>
              <p className="text-sm text-foreground/70 mb-3">F. Scott Fitzgerald</p>
              <Badge variant="blue">Reading</Badge>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">1984</h3>
              <p className="text-sm text-foreground/70 mb-3">George Orwell</p>
              <Badge variant="pink">Finished</Badge>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">Dune</h3>
              <p className="text-sm text-foreground/70 mb-3">Frank Herbert</p>
              <Badge variant="yellow">Not Started</Badge>
            </Card>
          </div>
        </section>

        {/* Table Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Table</h2>
          <div className="rule mb-6" />
          <Card padding="none">
            <Table headers={['Title', 'Author', 'Genre', 'Progress', 'Status']}>
              <TableRow>
                <TableCell className="font-semibold">The Great Gatsby</TableCell>
                <TableCell>F. Scott Fitzgerald</TableCell>
                <TableCell>Fiction</TableCell>
                <TableCell>120 / 300 pages, 40%</TableCell>
                <TableCell><Badge variant="blue">Reading</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">1984</TableCell>
                <TableCell>George Orwell</TableCell>
                <TableCell>Fiction</TableCell>
                <TableCell>320 / 320 pages, 100%</TableCell>
                <TableCell><Badge variant="pink">Finished</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Dune</TableCell>
                <TableCell>Frank Herbert</TableCell>
                <TableCell>Fiction</TableCell>
                <TableCell>0 / 412 pages, 0%</TableCell>
                <TableCell><Badge variant="yellow">Not Started</Badge></TableCell>
              </TableRow>
            </Table>
          </Card>
        </section>

        {/* Messages Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Messages</h2>
          <div className="rule mb-6" />
          <div className="space-y-4">
            <Message type="success" title="Success">
              Book added successfully!
            </Message>
            <Message type="error" title="Error">
              Failed to update book progress.
            </Message>
            <Message type="info" title="Information">
              You have 3 books currently reading.
            </Message>
            <Message type="warning" title="Warning">
              This book is about to be archived.
            </Message>
          </div>
        </section>

        {/* Empty State Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Empty State</h2>
          <div className="rule mb-6" />
          <Card>
            <EmptyState
              icon={<Package className="w-16 h-16" />}
              title="No books yet"
              description="Start by adding your first book to track your reading progress."
              action={
                <Button variant="primary">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Add Your First Book
                </Button>
              }
            />
          </Card>
        </section>

        {/* Loading State Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Loading State</h2>
          <div className="rule mb-6" />
          <Card>
            {loading ? (
              <LoadingState text="Loading books..." />
            ) : (
              <div className="text-center py-8">
                <Button variant="primary" onClick={simulateLoading}>
                  Simulate Loading
                </Button>
              </div>
            )}
          </Card>
        </section>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modal Title"
      >
        <div className="space-y-4">
          <p>This is a modal dialog with the ShelfLife design system.</p>
          <Input label="Example Input" placeholder="Type something..." />
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </AppLayout>
  );
}
