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
import { submitToGoogleSheet, fetchFromGoogleSheet } from "@/lib/googleSheets";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const DispatcherForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
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
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Dispatcher Form Data:", formData);

        try {
            const existingData = await fetchFromGoogleSheet("Dispatcher");
            const isDuplicate = existingData.some((row: any) =>
                row.email?.toString().toLowerCase() === formData.email.toLowerCase()
            );

            if (isDuplicate) {
                toast.error("A registration with this email already exists.");
                setIsSubmitting(false);
                return;
            }

            await submitToGoogleSheet("Dispatcher", formData);
            toast.success("Dispatcher registration submitted successfully!");
            // Optional: Reset form
            setFormData({
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
            });
        } catch (error) {
            toast.error("Failed to submit registration. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="gender" className="font-bold">Gender *</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, gender: value })} disabled={isSubmitting}>
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
                                <Select onValueChange={(value) => setFormData({ ...formData, dispatcherType: value })} disabled={isSubmitting}>
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
                                <Select onValueChange={(value) => setFormData({ ...formData, ownLicense: value })} disabled={isSubmitting}>
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 text-lg shadow-lg hover:shadow-accent/20 transition-all bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
                        {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
