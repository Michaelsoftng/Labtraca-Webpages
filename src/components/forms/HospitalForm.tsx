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

export const HospitalForm = () => {
  const [formData, setFormData] = useState({
    facilityName: "",
    facilityType: "",
    ownership: "",
    contactName: "",
    phone: "",
    email: "",
    role: "",
    servicesNeeded: [] as string[],
    country: "",
    state: "",
    lga: "",
    cityArea: "",
    address: "",
  });

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        servicesNeeded: [...formData.servicesNeeded, service],
      });
    } else {
      setFormData({
        ...formData,
        servicesNeeded: formData.servicesNeeded.filter((s) => s !== service),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hospital Form Data:", formData);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-2 border-border rounded-3xl overflow-hidden shadow-xl">
      <CardHeader className="bg-primary text-primary-foreground p-8">
        <CardTitle className="text-3xl font-black">
          Hospital / Clinic Registration Form
        </CardTitle>
        <p className="text-primary-foreground/80">
          Partner your healthcare facility with Testraca
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Facility Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Facility Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="facilityName" className="font-bold">
                  Hospital/Clinic Name *
                </Label>
                <Input
                  id="facilityName"
                  placeholder="Enter facility name"
                  value={formData.facilityName}
                  onChange={(e) =>
                    setFormData({ ...formData, facilityName: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facilityType" className="font-bold">
                  Facility Type *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, facilityType: value })
                  }
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospital">Hospital</SelectItem>
                    <SelectItem value="clinic">Clinic</SelectItem>
                    <SelectItem value="diagnostic_center">
                      Diagnostic Center
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownership" className="font-bold">
                  Ownership *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, ownership: value })
                  }
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select ownership" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Contact Person */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Contact Person
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactName" className="font-bold">
                  Name *
                </Label>
                <Input
                  id="contactName"
                  placeholder="Enter full name"
                  value={formData.contactName}
                  onChange={(e) =>
                    setFormData({ ...formData, contactName: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-bold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g., +234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="font-bold">
                  Role *
                </Label>
                <Input
                  id="role"
                  placeholder="e.g., Medical Director, Admin"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Services Needed */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Services Needed from Testraca
            </h3>
            <div className="grid md:grid-cols-2 gap-4 bg-muted/30 p-6 rounded-2xl">
              {[
                "In-house Sample Collection",
                "External Lab Partnership",
                "Result Review Support",
                "Home Sample Collection for Patients",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    onCheckedChange={(checked) =>
                      handleServiceChange(service, !!checked)
                    }
                  />
                  <Label
                    htmlFor={service}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                4
              </span>
              Location of Operation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="font-bold">
                  Country *
                </Label>
                <Input
                  id="country"
                  placeholder="e.g., Nigeria"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="font-bold">
                  State *
                </Label>
                <Input
                  id="state"
                  placeholder="e.g., Lagos"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lga" className="font-bold">
                  LGA *
                </Label>
                <Input
                  id="lga"
                  placeholder="Enter LGA"
                  value={formData.lga}
                  onChange={(e) =>
                    setFormData({ ...formData, lga: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cityArea" className="font-bold">
                  City/Area *
                </Label>
                <Input
                  id="cityArea"
                  placeholder="Enter City or Area"
                  value={formData.cityArea}
                  onChange={(e) =>
                    setFormData({ ...formData, cityArea: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address" className="font-bold">
                  Facility Address *
                </Label>
                <Textarea
                  id="address"
                  placeholder="Enter complete facility address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full font-bold h-12 text-lg shadow-lg"
          >
            Register Facility
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
