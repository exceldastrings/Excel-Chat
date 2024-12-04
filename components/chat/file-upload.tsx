'use client';

import { useDropzone } from 'react-dropzone';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Paperclip, X } from 'lucide-react';
import { useState } from 'react';

interface FileUploadProps {
  onUpload: (files: File[]) => void;
}

export function FileUpload({ onUpload }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  const handleUpload = () => {
    onUpload(files);
    setFiles([]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Paperclip className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div {...getRootProps()} className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer">
          <input {...getInputProps()} />
          <p>Drag & drop files here, or click to select files</p>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">Selected Files:</h4>
            <div className="space-y-2">
              {files.map((file) => (
                <div key={file.name} className="flex items-center justify-between bg-muted p-2 rounded">
                  <span className="text-sm truncate">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setFiles(files.filter((f) => f !== file))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button onClick={handleUpload} className="w-full mt-4">
              Upload Files
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}