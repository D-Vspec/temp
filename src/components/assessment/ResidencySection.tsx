import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import { Control } from "react-hook-form"

interface ResidencySectionProps {
  control: Control<any>
}

export default function ResidencySection({ control }: ResidencySectionProps) {
  return (
    <FormSection title="RESIDENCY ASSESSMENT" bgColor="bg-green-50">
      <div className="space-y-6">
        <FormField
          control={control}
          name="lengthOfStay"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Length of Stay in Barangay</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="lengthOfStay-1" />
                      <Label htmlFor="lengthOfStay-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - Couple has lived in the barangay for 1–2 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="lengthOfStay-2" />
                      <Label htmlFor="lengthOfStay-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - Couple has lived in the barangay for 3–5 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="lengthOfStay-3" />
                      <Label htmlFor="lengthOfStay-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Couple has lived in the barangay for more than 5 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="lengthOfStay-4" />
                      <Label htmlFor="lengthOfStay-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Spouse has lived in the barangay since childhood; spouse's parents, siblings, and relatives also reside there
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="lengthOfStay-5" />
                      <Label htmlFor="lengthOfStay-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Applicant has lived in the barangay since childhood; parents, siblings, and relatives also reside in same barangay
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="ownershipOfResidence"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Ownership of Residence</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="ownershipOfResidence-1" />
                      <Label htmlFor="ownershipOfResidence-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - Renting the home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="ownershipOfResidence-2" />
                      <Label htmlFor="ownershipOfResidence-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - Squatter on the land where the home is built
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="ownershipOfResidence-3" />
                      <Label htmlFor="ownershipOfResidence-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Tenant on the land where the home is built
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="ownershipOfResidence-4" />
                      <Label htmlFor="ownershipOfResidence-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Living with parents or in-laws
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="ownershipOfResidence-5" />
                      <Label htmlFor="ownershipOfResidence-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Owns house and lot with title
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="barangayRecord"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Barangay Record</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="barangayRecord-1" />
                      <Label htmlFor="barangayRecord-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - Only spouse is known in the barangay
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="barangayRecord-2" />
                      <Label htmlFor="barangayRecord-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - Born and raised in the barangay with no negative record
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="barangayRecord-3" />
                      <Label htmlFor="barangayRecord-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - From a well-known and reputable family in the barangay
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="barangayRecord-4" />
                      <Label htmlFor="barangayRecord-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Has a relative in the barangay council (excluding spouse, children, parents, and siblings)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="barangayRecord-5" />
                      <Label htmlFor="barangayRecord-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Self, spouse, parent, or sibling was elected to barangay office
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="familyStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Family Status</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="familyStatus-1" />
                      <Label htmlFor="familyStatus-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - Separated and living with a new partner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="familyStatus-2" />
                      <Label htmlFor="familyStatus-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - Widowed or separated and living alone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="familyStatus-3" />
                      <Label htmlFor="familyStatus-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Single
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="familyStatus-4" />
                      <Label htmlFor="familyStatus-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Living with a partner but not legally married
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="familyStatus-5" />
                      <Label htmlFor="familyStatus-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Legally married
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="toiletStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Toilet Status</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="toiletStatus-1" />
                      <Label htmlFor="toiletStatus-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - No personal toilet in the home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="toiletStatus-2" />
                      <Label htmlFor="toiletStatus-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - Toilet is outside the home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="toiletStatus-3" />
                      <Label htmlFor="toiletStatus-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Toilet is inside but without a water line
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="toiletStatus-4" />
                      <Label htmlFor="toiletStatus-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Toilet is inside with a water line
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="toiletStatus-5" />
                      <Label htmlFor="toiletStatus-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Toilet is inside, has a water line, and tiled flooring
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </FormSection>
  )
}