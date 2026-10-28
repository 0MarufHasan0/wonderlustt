"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import IDestination from "@/lib/types/destinations";
import { email } from "better-auth";
import { ArrowRight, Check,  } from "lucide-react";

const BOOKING_PERKS = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

const BookingCard = ({destination}:{destination:IDestination}) => {

     const { data: session} = authClient.useSession()
          
          const user = session?.user

        //   Date nia

          const handleBooking = async (e) =>{
            e.preventDefault()

            // Date collect kora
            const departureDate = e.target.departureDate.value
            // console.log(departureDate)

            // Data eksathe korlam

            const data = {
                username : user?.name,
                email : user?.email,
                image : user?.image,
                ...destination ,
                departureDate : departureDate,
                bookingDate : new Date ()
            }
            // console.log(data)

            // Post korlam data base e 


            const res = await fetch(`http://localhost:8000/booking`,{
                method:"POST",
                headers : {
                    'Content-Type': "application/json"
                },
                 body : JSON.stringify(data)
            })
            const bookingData = await res.json()
            // console.log("bookingData:", bookingData)
          }


    return (
        <div>
            <Card className="h-fit bg-muted/50">
          <CardContent className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="mt-1 text-3xl font-semibold text-cyan-600">
                ${Number(destination.price).toLocaleString("en-US")}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">per person</p>
            </div>

            <form onSubmit={handleBooking}>

            <Input
              type="date"
              name='departureDate'
              defaultValue={(destination.departureDate )?? ""}
              aria-label="Departure date"
            />

            <Button
            type="submit"
              size="lg"
              className="w-full bg-cyan-600 text-white hover:bg-cyan-700"
            >
              Book Now
              <ArrowRight data-icon="inline-end" />
            </Button>
            </form>

            <ul className="flex flex-col gap-2.5">
              {BOOKING_PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <Check className="size-3.5 shrink-0 text-green-500" />
                  {perk}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card> 
        </div>
    );
};

export default BookingCard;