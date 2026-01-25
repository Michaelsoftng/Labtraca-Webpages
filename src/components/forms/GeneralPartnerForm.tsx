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

export const GeneralPartnerForm = () => {
    const [formData, setFormData] = useState({
        partnerName: "",
        partnerType: "",
        natureOfPartnership: "",
        contactName: "",
        phone: "",
        email: "",
        country: "",
        state: "",
        lga: "",
        cityArea: "",
        expectedContribution: "",
        coverageCapacity: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("General Partner Form Data:", formData);
        // Handle submission logic here
    };

    return (
        <Card className="w-full max-w-4xl mx-auto border-2 border-border rounded-3xl overflow-hidden shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-8">
                <CardTitle className="text-3xl font-black">Partner Registration Form</CardTitle>
                <p className="text-primary-foreground/80">For organizations, agents, or strategic partners</p>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Partner Profile */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">1</span>
                            Partner Profile
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="partnerName" className="font-bold">Partner Name / Organization *</Label>
                                <Input
                                    id="partnerName"
                                    placeholder="Enter organization name"
                                    value={formData.partnerName}
                                    onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="partnerType" className="font-bold">Partner Type *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, partnerType: value })}>
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="individual">Individual Agent</SelectItem>
                                        <SelectItem value="health_facility">Health Facility</SelectItem>
                                        <SelectItem value="corporate">Corporate Organization</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="natureOfPartnership" className="font-bold">Nature of Partnership *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, natureOfPartnership: value })}>
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select nature" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="referral">Referral</SelectItem>
                                        <SelectItem value="operations">Operations</SelectItem>
                                        <SelectItem value="logistics">Logistics</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
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
                            <div className="space-y-2 md:col-span-2">
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
                        </div>
                    </div>

                    {/* Area of Operation */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">3</span>
                            Area of Operation
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
                                <Label htmlFor="state" className="font-bold">State (Multi-select allowed) *</Label>
                                <Input
                                    id="state"
                                    placeholder="e.g., Lagos, Abuja"
                                    value={formData.state}
                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lga" className="font-bold">LGA (Multi-select) *</Label>
                                <Input
                                    id="lga"
                                    placeholder="Enter LGAs"
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
                        </div>
                    </div>

                    {/* Partnership Scope */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">4</span>
                            Partnership Scope & Uploads
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="expectedContribution" className="font-bold">Expected Contribution</Label>
                                <Textarea
                                    id="expectedContribution"
                                    placeholder="What do you hope to bring to the partnership?"
                                    value={formData.expectedContribution}
                                    onChange={(e) => setFormData({ ...formData, expectedContribution: e.target.value })}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="coverageCapacity" className="font-bold">Coverage Capacity</Label>
                                <Textarea
                                    id="coverageCapacity"
                                    placeholder="What is your current coverage capacity?"
                                    value={formData.coverageCapacity}
                                    onChange={(e) => setFormData({ ...formData, coverageCapacity: e.target.value })}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                                <Label className="font-bold">Document Uploads (CAC Certificate, ID of Contact Person)</Label>
                                <Input type="file" multiple className="rounded-xl cursor-pointer" />
                                <p className="text-xs text-muted-foreground">Upload scanned copies of CAC Certificate and Valid ID.</p>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 text-lg shadow-lg hover:shadow-primary/20 transition-all">
                        Submit Partnership Request
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
