"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import type { Control } from "react-hook-form"

interface DataPrivacySectionProps {
  control: Control<any>
}

export function DataPrivacySection({ control }: DataPrivacySectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">DATA PRIVACY CONSENT FORM</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-xs leading-relaxed space-y-4 mb-6">
          <p>
            I/We authorize Bayanihan Bank, Inc., (BYNHN) and its agents, representatives and outsourced service to
            collect, use, process, update and disclose my/our personal information in accordance with the Data Subject
            under Republic Act No. 10173 otherwise known as the Data Privacy Act of 2012, its implementing Rules and
            Regulations (IRR), Bank's Data Privacy Statement and bank secrecy law, to verify, my/our personal
            information from any person or entity that the Bank may deem necessary including, but not limited to,
            financial institutions, credit bureaus and government authorities, to establish, confirm review or update
            my/or record, manage may/our account and/or services provided to me/us, to conduct customer risk, capacity
            and sustainability assessment, product development and audit, to market its products and services, and other
            legitimate business purposes, and to comply with its reporting obligations under applicable laws, rules and
            regulations.
          </p>
          <p>
            I/We agree to hold the Bank and the persons or entities from whom it may obtain, or with whom it may
            disclose or verify my/our personal information free and harmless from any liability arising from the use of
            any such information.
          </p>
          <p>
            I/We confirm that I am aware the under the Data Privacy Act, I have (a) the right to withdraw the consent
            hereby given or to object to the processing of my personal information provided there is no other legal
            ground or overriding legitimate interest for the processing thereof; (b) right to reasonable access, (c)
            right to rectification, and (d) right to erasure or blocking of my/our personal information subject,
            however, to the conditions for the legitimate exercise of the said rights under the Data Privacy Act and its
            IRR, and subject further to the right of the Bank to terminate the product or service availed by me/us
            should I/We withdraw my/our consent or request the removal of my personal information.
          </p>
          <p>I/We have read and understood and consent to be bound by all the terms and conditions stated above.</p>
          <p>I hereby certify that all information stated herein is true and correct to best of my knowledge.</p>
        </div>

        <FormField
          control={control}
          name="dataPrivacyConsent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I agree to the Data Privacy Consent terms and conditions
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}
