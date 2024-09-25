"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Download } from "lucide-react"

export default function ResumeDownloadButton() {
  const [email, setEmail] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    // This is a mock API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "A request to download the resume has been sent. You will receive an email shortly.",
      className:"bg-white dark:bg-gray-800 text-black dark:text-white"
    })
    setIsOpen(false)
    setEmail("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
          <Download className="mr-2 h-4 w-4" /> Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-black dark:text-white">
        <DialogHeader>
          <DialogTitle>Download Resume</DialogTitle>
          <DialogDescription>
            Due to privacy concerns, please enter your email address to receive the resume.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Resume
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}