"use client"
import { ColumnDef } from "@tanstack/react-table"

export const PostColumns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    accessorKey: "updateAt",
    header: "UpdateAt",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "authorName",
    header: "Author Name",
  },
]
