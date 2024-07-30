"use client"
import { ColumnDef } from "@tanstack/react-table"

export const ProfileColumns: ColumnDef<Profile>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "bio",
    header: "Bio",
  },
  {
    accessorKey: "userId",
    header: "UserId",
  },
]
