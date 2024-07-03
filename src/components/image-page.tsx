import { clerkClient } from '@clerk/nextjs/server';
import { X } from 'lucide-react';
import React from 'react';
import { getSpecificImage } from '~/server/queries';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
export default async function ImagePage(props: { imgId: number }) {
    const image = await getSpecificImage(props.imgId)
    function getImageEndings(text: string) {
        // Regular expression to match file extensions after the last period
        const extensionRegex = /\.[^.]+$/g;

        // Array to store matched extensions
        let extensions = [];

        // Use a loop to find all matches in the text
        let match;
        while ((match = extensionRegex.exec(text)) !== null) {
            extensions.push(match[0].substring(1)); // Push the matched extension without the period
        }

        return extensions;
    }
    const uploaderInfo = await clerkClient.users.getUser(image.userId)

    return (
        <div className="flex min-w-0 w-full h-full">
            <Button variant="ghost" size="sm" className='m-2' asChild><a href="/"><X /></a></Button>
            <div className="flex-shrink flex justify-center items-center p-8 flex-col">
                <img src={image.url} alt={image.name} className="object-contain" />
            </div>
            <div className="w-64 flex flex-col flex-shrink-0 border-l-2 p-2 ">
                <div className="text-xl font-bold border-b-2 p-2 flex justify-between items-center">
                    {image.name.replace(/\.(png|jpg|jpeg|gif|bmp|svg)\b/gi, "")}
                    <Badge>{getImageEndings(image.name)}</Badge>
                </div>
                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}