"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AgreementSection() {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">AGREEMENT</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-xs leading-relaxed space-y-4">
          <p>
            I/We affirm that each of the statement made in this application is true and correct and the signature(s)
            appearing herein is/are genuine. I/We further affirm that I/ we have provided the necessary information in
            order for Bayanihan Bank Inc. (the Bank) to accurately determine whether or not the product or service is
            appropriate. I/We agree to notify the Bank of any changes affecting the information contained herein. I/We
            further confirm that I/we do not have any outstanding civil or criminal case filed against me/us and that
            I/we do not have any arrearages/past due loans with any bank or financial institution.
          </p>
          <p>
            I/We hereby waive the confidentiality accorded by RA No. 1405 Secrecy of Bank Deposit Act, as amended, RA
            No. 6426 Foreign Currency Deposit Act of the Philippines, as amended, RA No. 8791 General Banking Law of
            2000, as amended, RA No. 9160 Anti-money Laundering Act of 2001, as amended, and other similar and
            applicable laws, pursuant to Sec. 26 of RA No. 7653, The New Central Bank Act and Sec. X337 of the BSP
            Manual of Regulations for Banks and allow examination, inquiry, inspection, and investigation of my/our
            deposits of whatever nature, photocopying of my/our documents, maintained with the Bank and in all banks in
            the Philippines. However, any information obtained from an examination of my/our deposits shall be held
            strictly confidential and may be used by the examiners only in connection with their supervisory and
            examination responsibility or by the BSP in an appropriate legal action it has initiated involving the
            accounts.
          </p>
          <p>
            I/We hereby authorize the Bank to conduct random verification with the Bureau of Internal Revenue (BIR) in
            order to establish the authenticity of the Income Tax Return (ITR/s) submitted by me/us duly stamped
            received by the BIR, together with the supporting financial statements, as applicable, and such other
            documents required there under in accordance with BSP Circular No.855.
          </p>
          <p>
            I/We further allow the Bank to disclose the required information to Credit Information Corporation pursuant
            to RA No. 9510 otherwise known as the Credit Information System Act (CISA) and its implementing rules. A
            photocopy of this authorization shall be effective and valid as the original. I/We agree that any
            information obtained by the Bank shall remain its property whether or not the loan is granted.
          </p>
          <p>
            I/We confirm that I am/we are a) not director(s), Officer(s), or stockholder(s) of the bank; and b) not the
            spouse(s) or relative(s) within the second degree of consanguinity or affinity, or a relative by legal
            adoption, of a director, office or stockholder of the Bank, or related interest of a director, officer or
            stockholder of the Bank as defined under law or BSP regulations. In case, I am/we are director(s),
            officer(s), or stockholder(s) of or have related interest(s) to a director, officer or stockholder of the
            Bank, I/we affirm that the necessary approvals have been obtained and or the same covered by a fringe
            benefit plan approved by the BSP. I/We agree that this loan application shall be subject to BSP regulations
            including those pertaining to directors, officers, stockholders of the Bank and their related interests.
          </p>
          <p>
            I/We fully understand that any material misrepresentation or failure to disclose information on my/our part
            as required herein may cause disapproval of my/our loan application; and the Bank at any time, shall have
            the right to cancel the loan approval and/or declare the loan due and demandable. I/We acknowledge that I/we
            have been informed by the Bank of the terms and conditions regarding my loan application including its
            current fees and charges being imposed.
          </p>
          <p>
            Further, in connection with this application, I/we agree to pay the Bank a non-refundable Property Appraisal
            Fee (applicable to loan application with loan collateral only) of not more than Three Thousand Pesos (PHP
            3,000.00) depending on the location of the security/collateral subject to change at the option of the Bank.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

