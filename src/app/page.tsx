'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl mb-4">
            Want to apply for a loan?
          </h1>
          <p className="text-lg text-zinc-600">
            Fast, secure, and hassle-free loan applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                New Customer
              </CardTitle>
              <CardDescription>
                First time applying? Start your journey here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/apply">
                <Button className="w-full">Start Application</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Existing Customer
              </CardTitle>
              <CardDescription>
                Already have an application?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/status">
                <Button variant="outline" className="w-full">Apply for Loan</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
