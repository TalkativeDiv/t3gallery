"use client";

import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useUploadThing } from "~/utils/uploadthing";
// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        const result = await $ut.startUpload(selectedFiles);

        console.log("uploaded files", result);
        // TODO: persist result in state maybe?
    };

    return {
        inputProps: {
            onChange,
            multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
    };
};


export function UploadButton() {
    const router = useRouter();
    const { inputProps } = useUploadThingInputProps("imageUploader", {
        onUploadBegin() { 
            toast("Uploading...", {
                duration: 100000,
                id: "upload-begin",
            })
        }, 
        onClientUploadComplete() {
            toast.dismiss("upload-begin");
            toast("Upload complete!")
            router.refresh();
        },
    });

    return (
        <div>
            <label htmlFor="upload-button" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "cursor-pointer")}>
                <Upload className="h-4 w-4" />
            </label>
            <input
                id="upload-button"
                type="file"
                className="sr-only"
                {...inputProps}
            />
        </div>
    );
}