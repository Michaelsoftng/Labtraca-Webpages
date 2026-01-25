import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LaboratoryForm = () => {
    const [formData, setFormData] = useState({
        labName: "",
        ownershipType: "",
        contactName: "",
        phone: "",
        email: "",
        designation: "",
        labCategory: "",
        dailyCapacity: "",
        country: "",
        state: "",
        lga: "",
        cityArea: "",
        fullAddress: "",
        acceptsExternalSamples: "",
        pickupWindow: "",
        tat: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Laboratory Form Data:", formData);
    };

    return (
        <Card className="w-full max-w-4xl mx-auto border-2 border-border rounded-3xl overflow-hidden shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-8">
                <CardTitle className="text-3xl font-black">Laboratory Registration Form</CardTitle>
                <p className="text-primary-foreground/80">Register your laboratory facility with Labtraca</p>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Facility Information */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">1</span>
                            Facility Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="labName" className="font-bold">Laboratory Name *</Label>
                                <Input
                                    id="labName"
                                    placeholder="Enter laboratory name"
                                    value={formData.labName}
                                    onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ownershipType" className="font-bold">Ownership Type *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, ownershipType: value })}>
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select type" />
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
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">2</span>
                            Contact Person
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="contactName" className="font-bold">Full Name *</Label>
                                <Input
                                    id="contactName"
                                    placeholder="Enter full name"
                                    value={formData.contactName}
                                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="font-bold">Phone Number *</Label>
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
                                <Label htmlFor="designation" className="font-bold">Designation *</Label>
                                <Input
                                    id="designation"
                                    placeholder="e.g., Lab Manager, Director"
                                    value={formData.designation}
                                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Laboratory Capacity */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">3</span>
                            Laboratory Capacity
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="labCategory" className="font-bold">Lab Category *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, labCategory: value })}>
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="clinical">Clinical</SelectItem>
                                        <SelectItem value="diagnostic">Diagnostic</SelectItem>
                                        <SelectItem value="research">Research</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dailyCapacity" className="font-bold">Daily Test Capacity (Range) *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, dailyCapacity: value })}>
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select capacity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0-50">0 - 50 tests</SelectItem>
                                        <SelectItem value="51-100">51 - 100 tests</SelectItem>
                                        <SelectItem value="101-500">101 - 500 tests</SelectItem>
                                        <SelectItem value="500+">500+ tests</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">4</span>
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
                                <Label htmlFor="fullAddress" className="font-bold">Full Lab Address *</Label>
                                <Textarea
                                    id="fullAddress"
                                    placeholder="Enter complete laboratory address"
                                    value={formData.fullAddress}
                                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Logistics */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">5</span>
                            Logistics & Collaboration
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="acceptsExternalSamples" className="font-bold">Accepts External Samples? *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, acceptsExternalSamples: value })}>
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select Yes/No" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="pickupWindow" className="font-bold">Sample Pickup Time Window</Label>
                                    <Input
                                        id="pickupWindow"
                                        placeholder="e.g., 9am - 4pm"
                                        value={formData.pickupWindow}
                                        onChange={(e) => setFormData({ ...formData, pickupWindow: e.target.value })}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tat" className="font-bold">Turnaround Time (TAT) per test category</Label>
                                    <Input
                                        id="tat"
                                        placeholder="e.g., 24-48 hours"
                                        value={formData.tat}
                                        onChange={(e) => setFormData({ ...formData, tat: e.target.value })}
                                        className="rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 text-lg shadow-lg">
                        Register Laboratory
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
