"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export const UserColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger> 
            <Button variant={'ghost'} className="outline-none">
              <span className="material-symbols-outlined">
                more_horiz
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white p-2 shadow-sm">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Separator className="mt-1"/>
            <DropdownMenuItem className="cursor-pointer mt-1 outline-none">View Details</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer mt-1 outline-none">Edit</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer mt-1 outline-none"><h1 className="text-red-500">Delete</h1></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
