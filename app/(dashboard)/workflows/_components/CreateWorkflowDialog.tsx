'use client';

import CustomDialogHeader from '@/components/CustomDialogHeader';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Layers2Icon } from 'lucide-react';
import React, { useState } from 'react';

function CreateWorkflowDialog({ triggerText }: { triggerText?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>{triggerText ?? 'Create Workflow'}</Button>
            </DialogTrigger>
            <DialogContent className="px-0">
                <CustomDialogHeader icon={Layers2Icon} title="Create Workflow" subTitle="Start building your workflow" />
            </DialogContent>
        </Dialog>
    );
}

export default CreateWorkflowDialog;
