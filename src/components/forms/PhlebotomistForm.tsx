import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PhlebotomistForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    professionalCategory: "",
    ownLicense: "",
    licenseNumber: "",
    issuingBody: "",
    yearsOfExperience: "",
    country: "",
    state: "",
    lga: "",
    cityArea: "",
    baseAddress: "",
    availability: false,
    followSOPs: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phlebotomist Form Data:", formData);
    // Handle submission logic here
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-2 border-border rounded-3xl overflow-hidden shadow-xl">
      <CardHeader className="bg-primary text-primary-foreground p-8">
        <CardTitle className="text-3xl font-black">Phlebotomist Registration Form</CardTitle>
        <p className="text-primary-foreground/80">Join our network of medical professionals</p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">1</span>
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-bold">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-bold">Phone Number (WhatsApp enabled) *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g., +234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender" className="font-bold">Gender *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob" className="font-bold">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">2</span>
              Professional Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="professionalCategory" className="font-bold">Professional Category *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, professionalCategory: value })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mls">MLS (Medical Laboratory Scientist)</SelectItem>
                    <SelectItem value="mlt">MLT (Medical Laboratory Technician)</SelectItem>
                    <SelectItem value="phlebotomy_tech">Phlebotomy Technician</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownLicense" className="font-bold">Do you Own a valid Licence/Permit? *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, ownLicense: value })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select Yes/No" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseNumber" className="font-bold">License Number</Label>
                <Input
                  id="licenseNumber"
                  placeholder="Enter your license number"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="issuingBody" className="font-bold">Issuing Body (MLSCN / Others)</Label>
                <Input
                  id="issuingBody"
                  placeholder="e.g., MLSCN"
                  value={formData.issuingBody}
                  onChange={(e) => setFormData({ ...formData, issuingBody: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsOfExperience" className="font-bold">Years of Experience *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, yearsOfExperience: value })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Location of Operation */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">3</span>
              Location of Operation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="font-bold">Country *</Label>
                <Input
                  id="country"
                  placeholder="e.g., Nigeria"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="font-bold">State *</Label>
                <Input
                  id="state"
                  placeholder="e.g., Lagos"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lga" className="font-bold">LGA *</Label>
                <Input
                  id="lga"
                  placeholder="Enter LGA"
                  value={formData.lga}
                  onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cityArea" className="font-bold">City/Area *</Label>
                <Input
                  id="cityArea"
                  placeholder="Enter City or Area"
                  value={formData.cityArea}
                  onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="baseAddress" className="font-bold">Base Address *</Label>
                <Textarea
                  id="baseAddress"
                  placeholder="Enter your full residential or office address"
                  value={formData.baseAddress}
                  onChange={(e) => setFormData({ ...formData, baseAddress: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Uploads and Declaration */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">4</span>
              Declaration & Uploads
            </h3>
            
            <div className="bg-muted/30 p-4 rounded-xl space-y-4">
               <div className="flex items-center space-x-2">
                <Checkbox 
                  id="availability" 
                  onCheckedChange={(checked) => setFormData({ ...formData, availability: !!checked })}
                />
                <Label htmlFor="availability" className="text-sm font-medium leading-none cursor-pointer">
                  Available for home sample collection
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="followSOPs" 
                  onCheckedChange={(checked) => setFormData({ ...formData, followSOPs: !!checked })}
                  required
                />
                <Label htmlFor="followSOPs" className="text-sm font-medium leading-none cursor-pointer">
                  Willingness to follow Labtraca SOPs *
                </Label>
              </div>
            </div>

            <div className="space-y-2">
                <Label className="font-bold">Document Uploads (ID, License, Certificate)</Label>
                <Input type="file" multiple className="rounded-xl cursor-pointer" />
                <p className="text-xs text-muted-foreground">Upload scanned copies of your ID and professional certifications.</p>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 text-lg shadow-lg hover:shadow-primary/20 transition-all">
            Submit Registration
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
