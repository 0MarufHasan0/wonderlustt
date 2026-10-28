
"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";


const DeleteDestinationDialog = ({id} : {id : string}) => {

    const handleDeleteDestination = async() => {
       const res = await fetch (`http://localhost:8000/destinations/${id}`,{
        method : "DELETE"
       })

       const data = await res.json()

    //    console.log(data)

    redirect('/destinations')
    
    }
    return (
        <div>
              <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" size="sm">
            <Trash2 data-icon="inline-start" />
            Cancel
          </Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteDestination}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </div>
    );
};

export default DeleteDestinationDialog;