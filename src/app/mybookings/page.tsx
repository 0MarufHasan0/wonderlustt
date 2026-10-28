import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Plane, Ticket } from 'lucide-react';
import { cn } from 'cn';
import Link from 'next/link';

type Booking = {
  _id?: string;
  bookingId?: string;
  title?: string;
  name?: string;
  imageUrl?: string;
  image?: string;
  departureDate?: string;
  date?: string;
  price?: string | number;
  status?: string;
};

const MybookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

  const res = await fetch(`http://localhost:8000/my-bookings/${user?.email}`);
  const bookings= await res.json();
  console.log('bookings:' ,bookings)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {/* Header */}
      <div className="mb-6 space-y-1 sm:mb-8">
        <h1 className="font-heading text-2xl font-semibold sm:text-3xl">
          My Bookings
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Booking list */}
      {bookings.length === 0 ? (
        <Card className="w-full items-center justify-center gap-3 py-12 text-center">
          <Plane className="size-10 text-muted-foreground" />
          <h3 className="font-heading text-lg font-medium">No bookings yet</h3>
          <p className="text-sm text-muted-foreground">
            {user
              ? "You haven't booked any trips yet. Start planning your next adventure!"
              : 'Sign in to view your bookings.'}
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-4 sm:gap-5">
          {bookings.map((booking, index) => (
            <BookingCard
              key={booking._id ?? booking.bookingId ?? index}
              booking={booking}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function StatusBadge({ status }: { status: string }) {
  const confirmed = status.toLowerCase() === 'confirmed';
  return (
    <Badge
      variant="outline"
      className={cn(
        'h-6 w-fit border-transparent px-2.5 text-xs font-medium',
        confirmed
          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400'
          : 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400'
      )}
    >
      {status}
    </Badge>
  );
}

function BookingCard({ booking }: { booking: Booking }) {
  const title = booking.title ?? booking.name ?? 'Untitled booking';
  const image = booking.imageUrl ?? booking.image;
  const departure = booking.departureDate ?? booking.date ?? '—';
  const bookingId = booking.bookingId ?? booking._id ?? '—';
  const status = booking.status ?? 'Pending';
  const price = Number(booking.price ?? 0).toLocaleString('en-US');

  return (
    <Card size="sm" className="w-full gap-0 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
        {/* Thumbnail */}
        <div className="shrink-0 overflow-hidden rounded-lg sm:w-56 md:w-64">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="aspect-[16/9] h-full w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[16/9] h-full w-full items-center justify-center bg-muted">
              <Plane className="size-8 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <StatusBadge status={status} />

          <h3 className="font-heading text-lg leading-snug font-medium sm:text-xl">
            {title}
          </h3>

          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="size-3.5" />
            Departure: {departure}
          </p>

          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Ticket className="size-3.5" />
            Booking ID: {String(bookingId).slice(0, 12)}
          </p>

          <p className="mt-2 text-xl font-semibold text-teal-600 sm:text-2xl dark:text-teal-400">
            ${price}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-row items-end gap-2 sm:ml-auto sm:flex-col sm:justify-center">
          <Button
            variant="destructive"
            className="flex-1 border border-destructive/40 bg-background sm:flex-none"
          >
            Cancel
          </Button>
          <Link href={`/destinations/${booking._id}`}>
          <Button  className="flex-1 sm:flex-none">View</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default MybookingsPage;
