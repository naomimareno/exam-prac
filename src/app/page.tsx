'use client';

import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <AppLayout>
      <PageHeader
        subtitle="Book Club Tracker"
        title="Your Books"
        action={
          <Link href="/books/new">
            <Button variant="primary">
              <BookOpen className="w-4 h-4 mr-2" />
              Add Book
            </Button>
          </Link>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmptyState
          icon={<BookOpen className="w-16 h-16" />}
          title="No books yet"
          description="Start building your book club library by adding your first book."
          action={
            <Link href="/books/new">
              <Button variant="primary">
                <BookOpen className="w-4 h-4 mr-2" />
                Add Your First Book
              </Button>
            </Link>
          }
        />
      </div>
    </AppLayout>
  );
}
