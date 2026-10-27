"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CATEGORIES = [
  "Beach",
  "Mountain",
  "City",
  "Cultural",
  "Adventure",
  "Honeymoon",
  "Wildlife",
  "Island",
] as const;

type PackageForm = {
  name: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

const EMPTY_FORM: PackageForm = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

function Field({ label, htmlFor, error, children, className }: FieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

const AddDestinationPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<PackageForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof PackageForm, string>>>({});

  const setField = (field: keyof PackageForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };


const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Faka object
  const nextErrors: Partial<Record<keyof PackageForm, string>> = {};

  // Validation
  if (!form.name.trim())
    nextErrors.name = "Destination name is required.";

  if (!form.country.trim())
    nextErrors.country = "Country is required.";

  if (!form.price.trim() || Number.isNaN(Number(form.price)))
    nextErrors.price = "Enter a valid price in USD.";

  if (!form.departureDate)
    nextErrors.departureDate = "Departure date is required.";

  // Error check
  if (Object.keys(nextErrors).length > 0) {
    setErrors(nextErrors);
    return;
  }

  // Backend API call
  const res = await fetch("http://localhost:8000/add-destination", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  console.log(data);

  setForm(EMPTY_FORM);
  router.push("/");
};

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <h1 className="font-heading text-center text-4xl font-light tracking-wide sm:text-5xl">
        Add New Travel Package
      </h1>

      <div className="mx-auto mt-10 max-w-2xl">
        <Card>
          <form onSubmit={handleSubmit} noValidate>
            <CardContent className="flex flex-col gap-5">
              <Field label="Destination Name" htmlFor="name" error={errors.name}>
                <Input
                  id="name"
                  placeholder="Bali Paradise"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Country" htmlFor="country" error={errors.country}>
                  <Input
                    id="country"
                    placeholder="Indonesia"
                    value={form.country}
                    onChange={(e) => setField("country", e.target.value)}
                    aria-invalid={Boolean(errors.country)}
                  />
                </Field>

                <Field label="Category" htmlFor="category">
                  <Select
                    value={form.category || null}
                    onValueChange={(value) => setField("category", value as string)}
                  >
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue>{form.category || "Select category"}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Price (USD)" htmlFor="price" error={errors.price}>
                  <Input
                    id="price"
                    type="number"
                    min={0}
                    placeholder="e.g. 1299"
                    value={form.price}
                    onChange={(e) => setField("price", e.target.value)}
                    aria-invalid={Boolean(errors.price)}
                  />
                </Field>

                <Field label="Duration" htmlFor="duration">
                  <Input
                    id="duration"
                    placeholder="e.g. 7 Days/6 Nights"
                    value={form.duration}
                    onChange={(e) => setField("duration", e.target.value)}
                  />
                </Field>
              </div>

              <Field
                label="Departure Date"
                htmlFor="departureDate"
                error={errors.departureDate}
              >
                <Input
                  id="departureDate"
                  type="date"
                  value={form.departureDate}
                  onChange={(e) => setField("departureDate", e.target.value)}
                  aria-invalid={Boolean(errors.departureDate)}
                />
              </Field>

              <Field label="Image URL" htmlFor="imageUrl">
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={form.imageUrl}
                  onChange={(e) => setField("imageUrl", e.target.value)}
                />
              </Field>

              <Field label="Description" htmlFor="description">
                <Textarea
                  id="description"
                  placeholder="Describe the travel experience..."
                  className="min-h-28 resize-none"
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
                />
              </Field>
            </CardContent>

            <CardFooter className="justify-end gap-3 bg-background">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleCancel}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 data-icon="inline-start" />
                Cancel
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-cyan-600 text-white hover:bg-cyan-700"
              >
                <Plus data-icon="inline-start" />
                Add Travel Package
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddDestinationPage;
