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

export const DispatcherForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        dispatcherType: "",
        ownLicense: "",
        country: "",
        state: "",
        lga: "",
        cityArea: "",
        baseLocation: "",
        workingDays: "",
        workingHours: "",
        maxDistance: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dispatcher Form Data:", formData);
        // Handle submission logic here
    };

    return (
        <Card className="w-full max-w-4xl mx-auto border-2 border-border rounded-3xl overflow-hidden shadow-xl">
            <CardHeader className="bg-accent text-accent-foreground p-8">
                <CardTitle className="text-3xl font-black">Dispatcher Registration Form</CardTitle>
                <p className="text-accent-foreground/80">Join our logistics and delivery fleet</p>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-accent/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm">1</span>
                            Personal Details
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="gender" className="font-bold">Gender *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                                    <SelectTrigger className="rounded-xl border-accent/20 focus:ring-accent">
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Dispatch Details */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-accent/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm">2</span>
                            Dispatch Details
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="dispatcherType" className="font-bold">Dispatcher Type *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, dispatcherType: value })}>
                                    <SelectTrigger className="rounded-xl border-accent/20 focus:ring-accent">
                                        <SelectValue placeholder="Select Vehicle" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bike">Bike / Motorcycle</SelectItem>
                                        <SelectItem value="car">Car</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ownLicense" className="font-bold">Valid Driver’s License? *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, ownLicense: value })}>
                                    <SelectTrigger className="rounded-xl border-accent/20 focus:ring-accent">
                                        <SelectValue placeholder="Select Yes/No" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Coverage Location */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-accent/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm">3</span>
                            Coverage Location
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
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
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <Label htmlFor="baseLocation" className="font-bold">Base Location *</Label>
                                <Textarea
                                    id="baseLocation"
                                    placeholder="Where do you start your day?"
                                    value={formData.baseLocation}
                                    onChange={(e) => setFormData({ ...formData, baseLocation: e.target.value })}
                                    required
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-accent/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm">4</span>
                            Availability & Uploads
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="workingDays" className="font-bold">Working Days *</Label>
                                <Input
                                    id="workingDays"
                                    placeholder="e.g., Mon-Fri, Weekends"
                                    value={formData.workingDays}
                                    onChange={(e) => setFormData({ ...formData, workingDays: e.target.value })}
                                    required
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="workingHours" className="font-bold">Working Hours *</Label>
                                <Input
                                    id="workingHours"
                                    placeholder="e.g., 8am - 6pm"
                                    value={formData.workingHours}
                                    onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                                    required
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="maxDistance" className="font-bold">Max Distance Covered (km) *</Label>
                                <Input
                                    id="maxDistance"
                                    type="number"
                                    placeholder="e.g., 20"
                                    value={formData.maxDistance}
                                    onChange={(e) => setFormData({ ...formData, maxDistance: e.target.value })}
                                    required
                                    className="rounded-xl border-accent/20 focus-visible:ring-accent"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                                <Label className="font-bold">Document Uploads (ID, License, Vehicle Photo)</Label>
                                <Input type="file" multiple className="rounded-xl cursor-pointer border-accent/20" />
                                <p className="text-xs text-muted-foreground">Upload scanned copies of your Valid ID, Driver's License, and Vehicle Photo.</p>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 text-lg shadow-lg hover:shadow-accent/20 transition-all bg-accent text-accent-foreground hover:bg-accent/90">
                        Submit Registration
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
